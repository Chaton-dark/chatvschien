controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . . . . 
        . . . 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
    otherSprite.destroy(effects.bubbles, 500)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.coolRadial, 500)
    scene.cameraShake(4, 500)
    music.jumpDown.play()
})
let CHIEN: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 6 . . . . . . . 6 . . . . 
    6 6 . 6 6 . . . . . 6 6 . . 6 6 
    6 6 . 6 3 6 6 6 6 6 3 6 . . 6 6 
    6 6 . 6 6 6 6 6 6 6 6 6 . . 6 6 
    6 6 . 6 6 1 f 6 f 1 6 6 . . 6 6 
    6 6 . 6 6 1 1 6 1 1 6 6 . . 6 6 
    6 6 6 6 6 1 1 6 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 
    . . . 6 6 6 f f f 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(78, 83)
effects.starField.startScreenEffect()
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    mySprite.setVelocity(controller.dx(7500), 0)
})
game.onUpdateInterval(500, function () {
    CHIEN = sprites.create(assets.image`BoB`, SpriteKind.Enemy)
    CHIEN.setPosition(randint(scene.screenWidth() - 10, 10), 0)
    CHIEN.vy = 50
})
