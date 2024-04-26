Bangle.loadWidgets();
Bangle.drawWidgets();

Bangle.setOptions({
    lockTimeout: 60000,
    backlightTimeout: 99000
});

const BANGLEJS2 = process.env.HWVERSION==2;
const storage = require('Storage');
let settings;

function updateSettings() {
    //storage.erase('setting.json'); // - not needed, just causes extra writes if settings were the same
    storage.write('setting.json', settings);
}

function updateOptions() {
    var o = settings.options;
    // Check to make sure nobody disabled all wakeups and locked themselves out!
    if (BANGLEJS2) {
        if (!(o.wakeOnBTN1||o.wakeOnFaceUp||o.wakeOnTouch||o.wakeOnDoubleTap||o.wakeOnTwist)) {
            o.wakeOnBTN1 = true;
        }
    } else {
        if (!(o.wakeOnBTN1||o.wakeOnBTN2||o.wakeOnBTN3||o.wakeOnFaceUp||o.wakeOnTouch||o.wakeOnTwist))
            o.wakeOnBTN2 = true;
    }
    updateSettings();
    Bangle.setOptions(o)
}



function resetSettings() {
    settings = {
        ble: true,                      // Bluetooth enabled by default
        blerepl: true,                  // Is REPL on Bluetooth - can Espruino IDE be used?
        log: false,                     // Do log messages appear on screen?
        quiet: 0,                       // quiet mode:  0: off, 1: priority only, 2: total silence
        timeout: 10,                    // Default LCD timeout in seconds
        vibrate: true,                  // Vibration enabled by default. App must support
        beep: BANGLEJS2 ? true : "vib", // Beep enabled by default. App must support
        timezone: 0,                    // Set the timezone for the device
        HID: false,                     // BLE HID mode, off by default
        clock: null,                    // a string for the default clock's name
        // clockHasWidgets: false,      // Does the clock in 'clock' contain the string 'Bangle.loadWidgets'
        "12hour" : false,               // 12 or 24 hour clock?
        firstDayOfWeek: 0,              // 0 -> Sunday (default), 1 -> Monday
        brightness: 1,                  // LCD brightness from 0 to 1
        // welcomed : undefined/true (whether welcome app should show)
        options: {
            wakeOnBTN1: true,
            wakeOnBTN2: true,
            wakeOnBTN3: true,
            wakeOnFaceUp: false,
            wakeOnTouch: false,
            wakeOnTwist: false,
            twistThreshold: 819.2,
            twistMaxY: -800,
            twistTimeout: 1000
        },
    };
    updateSettings();
}

//settings = storage.readJSON('setting.json', 1);
//if (("object" != typeof settings) ||
//    ("object" != typeof settings.options))
//    resetSettings();

var hrmCountPoll = 0;
var batteryInterval, connected = false;
function onHRM(hrm){
    hrmCountPoll = hrmCountPoll + 1;
    //console.log("hrm: " + hrm.bpm)
    if (connected && hrmCountPoll > 100){
        hrmCountPoll = 0;
        NRF.updateServices({
            "123f0001-40c3-4cf3-9797-9a8703e32795": {
                "123f0003-40c3-4cf3-9797-9a8703e32795": {
                    value : new Int32Array([Math.round(hrm.bpm), hrm.confidence]).buffer,
                    notify: true
                }
            }
        });
    }
}
function onAccel(d) {
    //console.log("diff: " + d.diff + " mag: " + d.mag);
    if (connected) {
        if(d.diff > 1.0 && d.mag > 1.5) {
            NRF.updateServices({
                "123f0001-40c3-4cf3-9797-9a8703e32795": {
                    "123f0002-40c3-4cf3-9797-9a8703e32795": {
                        value : new Float32Array([d.diff, d.mag]).buffer,
                        notify: true
                    }
                }
            });
        }
    }
}
function stepCount(){
    if (connected) {
        NRF.updateServices({
            "123f0001-40c3-4cf3-9797-9a8703e32795": {
                "123f0004-40c3-4cf3-9797-9a8703e32795": {
                    value : new Int32Array([Bangle.getStepCount()]).buffer,
                    notify: true
                }
            }
        });
    }
}

function batteryPercentage(){
    if (connected) {
        NRF.updateServices({
            "123f0001-40c3-4cf3-9797-9a8703e32795": {
                "123f0005-40c3-4cf3-9797-9a8703e32795": {
                    value : new Int32Array([E.getBattery()]).buffer,
                    notify: true
                }
            }
        });
    }
}

function uiLog(text){
    g.clear();
    g.setFont("Vector", 20); // vector font, 80px
    g.drawString(text, 5, 110);
}

function onInit() {
    NRF.on('connect', function () { connected = true;
        uiLog("connected");
    });
    NRF.on('disconnect', function () { connected = false;
        uiLog("disconnected");
    });

    NRF.on('bond', function(status) {
        uiLog("bond: " + status);
        if(status == "success"){
            connected = true;
        } else {
            connected = false;
        }
    });

    NRF.on('advertising', function(isAdvertising) {
        uiLog("advertising: " + isAdvertising);
    });

    NRF.setServices({
        "123f0001-40c3-4cf3-9797-9a8703e32795": {
            "123f0002-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                value : new Float32Array([0, 0]).buffer,
            },
            "123f0003-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                value : new Int32Array([0,0]).buffer,
            },
            "123f0004-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                value : new Int32Array([0]).buffer
            },
            "123f0005-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                value : new Int32Array([0]).buffer
            }
        }
    });
    uiLog("Waiting..","Bluetooth Connection");
    setInterval(stepCount, 30000);
    setInterval(batteryPercentage, 5000);
    Bangle.on('accel', onAccel);
    Bangle.on('HRM-raw', onHRM);
    Bangle.setHRMPower(1, "emerno");
}
onInit(); // set up our new services