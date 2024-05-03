Bangle.loadWidgets();
Bangle.drawWidgets();
//E.setBootCode("");
console.log(Modules.getCached());
Bangle.removeAllListeners();
NRF.removeAllListeners();
clearTimeout();
clearInterval();

require('Storage').read('bootupdate.js');

Bangle.setOptions({
    lockTimeout: 0,
    backlightTimeout: 10000,
    btnLoadTimeout: 0,
    hrmSportMode: -1
});

NRF.setTxPower(8);

var bootTimer = 0;
setInterval(function() {
    if (BTN.read())
        bootTimer++;
    else bootTimer=0;

    if (bootTimer<10) E.kickWatchdog();
}, 2000);

Graphics.prototype.setFontAnton = function(scale) {
    // Actual height 69 (68 - 0)
    g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAA/gAAAAAAAAAAP/gAAAAAAAAAH//gAAAAAAAAB///gAAAAAAAAf///gAAAAAAAP////gAAAAAAD/////gAAAAAA//////gAAAAAP//////gAAAAH///////gAAAB////////gAAAf////////gAAP/////////gAD//////////AA//////////gAA/////////4AAA////////+AAAA////////gAAAA///////wAAAAA//////8AAAAAA//////AAAAAAA/////gAAAAAAA////4AAAAAAAA///+AAAAAAAAA///gAAAAAAAAA//wAAAAAAAAAA/8AAAAAAAAAAA/AAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////AAAAAB///////8AAAAH////////AAAAf////////wAAA/////////4AAB/////////8AAD/////////+AAH//////////AAP//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wA//8AAAAAB//4A//wAAAAAAf/4A//gAAAAAAP/4A//gAAAAAAP/4A//gAAAAAAP/4A//wAAAAAAf/4A///////////4Af//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH//////////AAD/////////+AAB/////////8AAA/////////4AAAP////////gAAAD///////+AAAAAf//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAP/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/AAAAAAAAAAA//AAAAAAAAAAA/+AAAAAAAAAAB/8AAAAAAAAAAD//////////gAH//////////gAP//////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAB/gAAD//4AAAAf/gAAP//4AAAB//gAA///4AAAH//gAB///4AAAf//gAD///4AAA///gAH///4AAD///gAP///4AAH///gAP///4AAP///gAf///4AAf///gAf///4AB////gAf///4AD////gA////4AH////gA////4Af////gA////4A/////gA//wAAB/////gA//gAAH/////gA//gAAP/////gA//gAA///8//gA//gAD///w//gA//wA////g//gA////////A//gA///////8A//gA///////4A//gAf//////wA//gAf//////gA//gAf/////+AA//gAP/////8AA//gAP/////4AA//gAH/////gAA//gAD/////AAA//gAB////8AAA//gAA////wAAA//gAAP///AAAA//gAAD//8AAAA//gAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAD/wAAB//8AAAAP/wAAB///AAAA//wAAB///wAAB//wAAB///4AAD//wAAB///8AAH//wAAB///+AAP//wAAB///+AAP//wAAB////AAf//wAAB////AAf//wAAB////gAf//wAAB////gA///wAAB////gA///wAAB////gA///w//AAf//wA//4A//AAA//wA//gA//AAAf/wA//gB//gAAf/wA//gB//gAAf/wA//gD//wAA//wA//wH//8AB//wA///////////gA///////////gA///////////gA///////////gAf//////////AAf//////////AAP//////////AAP/////////+AAH/////////8AAH///+/////4AAD///+f////wAAA///8P////gAAAf//4H///+AAAAH//gB///wAAAAAP4AAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAA//wAAAAAAAAAP//wAAAAAAAAB///wAAAAAAAAf///wAAAAAAAH////wAAAAAAA/////wAAAAAAP/////wAAAAAB//////wAAAAAf//////wAAAAH///////wAAAA////////wAAAP////////wAAA///////H/wAAA//////wH/wAAA/////8AH/wAAA/////AAH/wAAA////gAAH/wAAA///4AAAH/wAAA//+AAAAH/wAAA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAH/4AAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAA/////+B///AAA/////+B///wAA/////+B///4AA/////+B///8AA/////+B///8AA/////+B///+AA/////+B////AA/////+B////AA/////+B////AA/////+B////gA/////+B////gA/////+B////gA/////+A////gA//gP/gAAB//wA//gf/AAAA//wA//gf/AAAAf/wA//g//AAAAf/wA//g//AAAA//wA//g//gAAA//wA//g//+AAP//wA//g////////gA//g////////gA//g////////gA//g////////gA//g////////AA//gf///////AA//gf//////+AA//gP//////+AA//gH//////8AA//gD//////4AA//gB//////wAA//gA//////AAAAAAAH////8AAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////gAAAAB///////+AAAAH////////gAAAf////////4AAB/////////8AAD/////////+AAH//////////AAH//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wAf//////////4A//wAD/4AAf/4A//gAH/wAAP/4A//gAH/wAAP/4A//gAP/wAAP/4A//gAP/4AAf/4A//wAP/+AD//4A///wP//////4Af//4P//////wAf//4P//////wAf//4P//////wAf//4P//////wAP//4P//////gAP//4H//////gAH//4H//////AAH//4D/////+AAD//4D/////8AAB//4B/////4AAA//4A/////wAAAP/4AP////AAAAB/4AD///4AAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAADgA//gAAAAAAP/gA//gAAAAAH//gA//gAAAAB///gA//gAAAAP///gA//gAAAD////gA//gAAAf////gA//gAAB/////gA//gAAP/////gA//gAB//////gA//gAH//////gA//gA///////gA//gD///////gA//gf///////gA//h////////gA//n////////gA//////////gAA/////////AAAA////////wAAAA///////4AAAAA///////AAAAAA//////4AAAAAA//////AAAAAAA/////4AAAAAAA/////AAAAAAAA////8AAAAAAAA////gAAAAAAAA///+AAAAAAAAA///4AAAAAAAAA///AAAAAAAAAA//4AAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gB///wAAAAP//4H///+AAAA///8P////gAAB///+f////4AAD///+/////8AAH/////////+AAH//////////AAP//////////gAP//////////gAf//////////gAf//////////wAf//////////wAf//////////wA///////////wA//4D//wAB//4A//wB//gAA//4A//gA//gAAf/4A//gA//AAAf/4A//gA//gAAf/4A//wB//gAA//4A///P//8AH//4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////gAP//////////gAP//////////AAH//////////AAD/////////+AAD///+/////8AAB///8f////wAAAf//4P////AAAAH//wD///8AAAAA/+AAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAB///+AA/+AAAAP////gA//wAAAf////wA//4AAB/////4A//8AAD/////8A//+AAD/////+A///AAH/////+A///AAP//////A///gAP//////A///gAf//////A///wAf//////A///wAf//////A///wAf//////A///wA///////AB//4A//4AD//AAP/4A//gAB//AAP/4A//gAA//AAP/4A//gAA/+AAP/4A//gAB/8AAP/4A//wAB/8AAf/4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH/////////+AAD/////////8AAB/////////4AAAf////////wAAAP////////AAAAB///////4AAAAAD/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAB/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="), 46, atob("EiAnGicnJycnJycnEw=="), 78 + (scale << 8) + (1 << 16));
};

let lastUILog = "";
let drawTimeout;
let draw;
let isAlerting = false;
let alertCancelInterval, clearAlertCancelInterval, clearAlertNotCancelled;

function setDrawClock(){
    console.log("setDrawClock");
    draw = function() {
        var x = g.getWidth() / 2;
        var y = g.getHeight() / 2;
        g.reset().clearRect(Bangle.appRect); // clear whole background (w/o widgets)
        var date = new Date();
        var timeStr = require("locale").time(date, 1); // Hour and minute
        g.setFontAlign(0, 0).setFont("Anton").drawString(timeStr, x, y);
        // Show date and day of week
        var dateStr = require("locale").date(date, 0).toUpperCase()+"\n"+
            require("locale").dow(date, 0).toUpperCase();
        g.setFontAlign(0, 0).setFont("6x8", 2).drawString(dateStr, x, y+48);

        g.setFontAlign(0, 0).setFont("4x6", 2).drawString(lastUILog, x, y+80);

        // queue next draw
        if (drawTimeout) clearTimeout(drawTimeout);
        drawTimeout = setTimeout(function() {
            drawTimeout = undefined;
            draw();
        }, 60000 - (Date.now() % 60000));
    };
    draw();
}

function setDrawAlert(){
    console.log("setDrawAlert");
    draw = function() {
        var x = g.getWidth() / 2;
        var y = g.getHeight() / 2;
        g.reset().clearRect(Bangle.appRect); // clear whole background (w/o widgets)
        //g.setBgColor(155,0,0);
        g.setColor(155,0,0).fillRect(Bangle.appRect);
        g.setColor(155,155,155);
        g.setFontAlign(0, 0).setFont("Vector", 40).drawString("Sturz?", x, y);

        // queue next draw
        if (drawTimeout) clearTimeout(drawTimeout);
        drawTimeout = setTimeout(function() {
            drawTimeout = undefined;
            draw();
        }, 1000 - (Date.now() % 1000));
    };
    draw();
}

function onAlertCancelled(){
    console.log("onAlertCancelled");
    isAlerting = false;
    setDrawClock();
}

function onAlertNotCancelled(data) {
    console.log("onAlertNotCancelled");
    resetTimers();
    if (connected) {
        NRF.updateServices({
            "123f0001-40c3-4cf3-9797-9a8703e32795": {
                "123f0002-40c3-4cf3-9797-9a8703e32795": {
                    value: new Float32Array([Date.now(), data.diff, data.mag]).buffer,
                    notify: true
                }
            }
        });
    }
    setDrawClock();
}

function stepCount(){
    if (connected) {
        NRF.updateServices({
            "123f0001-40c3-4cf3-9797-9a8703e32795": {
                "123f0004-40c3-4cf3-9797-9a8703e32795": {
                    value : new Float32Array([Date.now(), Bangle.getStepCount()]).buffer,
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
                    value : new Float32Array([Date.now(), E.getBattery()]).buffer,
                    notify: true
                }
            }
        });
    }
}

function onHRM(hrm){
    hrmCountPoll = hrmCountPoll + 1;
    //console.log("hrm: " + hrm.bpm)
    if (connected && hrmCountPoll > 100){
        hrmCountPoll = 0;
        NRF.updateServices({
            "123f0001-40c3-4cf3-9797-9a8703e32795": {
                "123f0003-40c3-4cf3-9797-9a8703e32795": {
                    value : new Float32Array([Date.now(), Math.round(hrm.bpm), hrm.confidence]).buffer,
                    notify: true
                }
            }
        });
    }
}

function onLongPress() {
    console.log("onLongPress");
    Bangle.buzz(1000, 1);
    if (connected) {
        NRF.updateServices({
            "123f0001-40c3-4cf3-9797-9a8703e32795": {
                "123f0006-40c3-4cf3-9797-9a8703e32795": {
                    value : new Float32Array([Date.now(), 1]).buffer,
                    notify: true
                }
            }
        });
    }
}

function resetTimers(){
    console.log("resetTimers");
    if(alertCancelInterval)
        clearInterval(alertCancelInterval);
    if(clearAlertCancelInterval)
        clearTimeout(clearAlertCancelInterval);
    if(clearAlertNotCancelled)
        clearTimeout(clearAlertNotCancelled);

    alertCancelInterval = null;
    clearAlertCancelInterval = null;
    clearAlertNotCancelled = null;
    isAlerting = false;
}

function onButtonPressed(n){
    console.log("onButtonPressed");
    if(isAlerting) {
        resetTimers();
        onAlertCancelled();
    }
}

function alert(){
    Bangle.buzz(150, 1);
}

function onAlert(data){
    console.log("onAlert");
    isAlerting = true;
    setDrawAlert();
    alertCancelInterval = setInterval(alert, 300);
    clearAlertCancelInterval = setTimeout(clearInterval, 10000, alertCancelInterval);
    clearAlertNotCancelled = setTimeout(onAlertNotCancelled, 10000, data);
}

var hrmCountPoll = 0;
var batteryInterval, connected = false;


function onAccel(d) {
    //nsole.log("diff: " + d.diff + " mag: " + d.mag);
    if(!isAlerting){
        if(d.diff > 1.0 && d.mag > 1.8) {
            console.log("ON ALERT: " + d.mag)
            setTimeout(onAlert, 0, d);
        }
    }
}

function onBondErased(){
    uiLog("bonds erased");
}

function uiLog(text){
    lastUILog = text;
    draw();
}

function onInit() {
    NRF.on('connect', function () { connected = true;
        uiLog("connected");
    });
    NRF.on('disconnect', function () { connected = false;
        uiLog("disconnected");
        NRF.eraseBonds(onBondErased);
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
                description: "accel data",
                value : new Float32Array([0 ,0, 0]).buffer,
            },
            "123f0003-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                description: "heart rate",
                value : new Float32Array([0, 0, 0]).buffer,
            },
            "123f0004-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                description: "steps count",
                value : new Float32Array([0, 0]).buffer
            },
            "123f0005-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                description: "battery percentage",
                value : new Float32Array([0, 0]).buffer
            },
            "123f0006-40c3-4cf3-9797-9a8703e32795": {
                notify: true,
                description: "notification for emergency button",
                value : new Float32Array([0, 0]).buffer
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

let btnReleaseTimeout;

function onBtnReleased(e){
    console.log("onBtnReleased");
    if(btnReleaseTimeout)
        clearTimeout(btnReleaseTimeout);
}

function onBtnPressed(e) {
    console.log("onBtnPressed");
    onButtonPressed();
    if(BTN1.read()){
        btnReleaseTimeout = setTimeout(onLongPress, 3000);
    }
}

setWatch(onBtnPressed,BTN1,{repeat:true, edge:'rising'});
setWatch(onBtnReleased,BTN1,{repeat:true, edge:'falling'});

function initGraphics(){
    //Bangle.setUI({
    //    mode : "clock",
    //    btn: onButtonPressed
    //});
    Bangle.loadWidgets();
    setTimeout(Bangle.drawWidgets,0);
}

function startApp(){
    Bangle.setOptions({
        lockTimeout: 0,
        backlightTimeout: 10000,
        btnLoadTimeout: 0,
        hrmSportMode: -1
    });

    NRF.setTxPower(8);

    var bootTimer = 0;
    setInterval(function() {
        if (BTN.read())
            bootTimer++;
        else bootTimer=0;

        if (bootTimer<10) E.kickWatchdog();
    }, 2000);

    Bangle.setLocked(false);

    setDrawClock();
    onInit(); // set up our new services
    initGraphics();
}

startApp();
