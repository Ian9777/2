input.onButtonPressed(Button.A, function () {
    led.unplot(X, Y)
    if (X - 1 < 0) {
        X = 4
        if (Y - 1 < 0) {
            Y = 4
        } else {
            Y += -1
        }
    } else {
        X += -1
    }
    led.plot(X, Y)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    led.unplot(X, Y)
    if (X + 1 > 4) {
        X = 0
        if (Y + 1 > 4) {
            Y = 0
        } else {
            Y += 1
        }
    } else {
        X += 1
    }
    led.plot(X, Y)
})
let Y = 0
let X = 0
X = 2
Y = 2
led.plot(X, Y)
