const bluetoothServiceUUID = 'f8b23a4d-89ad-4220-8c9f-d81756009f0c';
const magCharacteristicUUID = 'f8b23a4d-89ad-4220-8c9f-d81756009f0c';
const accelCharacteristicUUID = 'f8b23a4d-89ad-4220-8c9f-d81756009f0d';
var count = 0;
var batteryInterval, connected = false;
function onMag(d) {
    if (connected) {
        NRF.updateServices({
            bluetoothServiceUUID: {
                magCharacteristicUUID: {
                    value: new Int32Array([d.x, d.y, d.z]).buffer,
                    notify: true
                }
            }
        });
    }
}
function onAccel(d) {
    if (connected) {
        NRF.updateServices({
            bluetoothServiceUUID: {
                accelCharacteristicUUID: {
                    value: new Float32Array([d.x, d.y, d.z]).buffer,
                    notify: true
                }
            }
        });
    }
}

function onInit() {
    // on connect / disconnect blink the green / red LED turn on / off the magnetometer
    NRF.on('connect', function () { connected = true;
        g.clear();
        g.setFont("Vector", 20); // vector font, 80px
        g.drawString("connected", 5, 110);
        Bangle.setCompassPower(1);
    });
    NRF.on('disconnect', function () { connected = false;
        g.clear();
        g.setFont("Vector", 20); // vector font, 80px
        g.drawString("ready", 5, 110);
        Bangle.setCompassPower(0); });

    NRF.on('bond', function(status) {
        uiLog("bond: " + status)
        if(status == 'success'){
            g.clear();
            g.setFont("Vector", 20); // vector font, 80px
            g.drawString("bond succ", 5, 110);
        }
    });

    NRF.on('advertising', function(isAdvertising) {
        g.clear();
        g.setFont("Vector", 20); // vector font, 80px
        if(isAdvertising){
            g.drawString("advertising", 5, 110);
        } else {
            g.drawString("advertising off", 5, 110);
        }
    });

    // declare the services
    NRF.setServices({
            // Magneto&accelerometer service
            bluetoothServiceUUID: {
                magCharacteristicUUID: {
                    description: 'Bangle magnetometer',
                    notify: true,
                    readable: true,
                    value: new Int32Array([0, 0, 0]).buffer,
                    writable: true,
                    onWrite: function (evt) {
                        var d = evt.data && evt.data[0];
                        if ([80, 40, 20, 10, 5].indexOf(d) >= 0) { Bangle.setPollInterval(1000 / d); }
                    }
                },
                accelCharacteristicUUID: {
                    description: 'Bangle accelerometer',
                    notify: true,
                    readable: true,
                    value: new Float32Array([0, 0, 0, 0, 0]).buffer
                }
            }
        },
        {advertise:[bluetoothServiceUUID]}
    );
    Bangle.on('accel', onAccel);
    Bangle.on('mag', onMag);
    NRF.wake();
    NRF.setAdvertising({
        bluetoothServiceUUID : undefined // Advertise service UUID 0x180D (HRM)
    });
}
onInit(); // set up our new services
g.clear();
g.setFont("Vector", 20); // vector font, 80px 
g.drawString("ready", 5, 110);
NRF.disconnect();