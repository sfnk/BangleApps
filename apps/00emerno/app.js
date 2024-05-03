function onAccel(d) {
    console.log("diff: " + d.diff + " mag: " + d.mag);

}

Bangle.on('accel', onAccel);
