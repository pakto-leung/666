radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P16, 1023)
    } else if (receivedNumber == 1) {
        pins.analogWritePin(AnalogPin.P15, 666)
        pins.analogWritePin(AnalogPin.P16, 1023)
    } else if (receivedNumber == 2) {
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P16, 666)
    } else {
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
})
radio.setGroup(255)
