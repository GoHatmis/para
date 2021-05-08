input.onButtonPressed(Button.A, function () {
    if (watsonX > 0) {
        led.unplot(watsonX, watsonY)
        watsonX += -1
        led.plot(watsonX, watsonY)
    }
})
input.onButtonPressed(Button.B, function () {
    if (watsonX < 4) {
        led.unplot(watsonX, watsonY)
        watsonX += 1
        led.plot(watsonX, watsonY)
    }
})
let soldaatY = 0
let soldaatX = 0
let watsonY = 0
let watsonX = 0
let snelheid = 500
watsonX = 2
watsonY = 4
led.plot(watsonX, watsonY)
basic.forever(function () {
    soldaatX = randint(0, 4)
    soldaatY = 0
    basic.pause(1000)
    led.plot(watsonX, watsonY)
    while (soldaatY < 4) {
        basic.pause(snelheid)
        led.unplot(soldaatX, soldaatY)
        soldaatY += 1
        led.plot(soldaatX, soldaatY)
    }
    if (soldaatX != watsonX) {
        game.gameOver()
    } else {
        game.addScore(1)
        basic.pause(250)
        if (game.score() % 5 == 0) {
            if (snelheid > 200) {
                snelheid += -100
            }
        }
        led.plot(soldaatX, soldaatY)
    }
})
