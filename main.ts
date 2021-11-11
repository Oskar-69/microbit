input.onButtonPressed(Button.A, function () {
    new_syop = false
    while (new_syop == false) {
        count += 1
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    new_syop = true
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    count = 0
})
let new_syop = false
let count = 0
count = 0
basic.forever(function () {
    basic.showNumber(count)
})
