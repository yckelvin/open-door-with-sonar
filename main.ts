basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    ) < 5) {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    } else {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
    }
})
