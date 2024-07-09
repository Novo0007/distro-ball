controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f 7 f f 7 7 f f f f f 
    f 7 7 7 7 7 7 7 7 7 f 7 7 7 f f 
    f 7 f f f f f f f f f f f f f f 
    f 7 f 7 7 f f 7 f 7 7 f f 7 f f 
    f 7 f 7 f 7 f 7 f 7 f 7 f 7 f f 
    f 7 f 7 f 7 f 7 f 7 f 7 f 7 f f 
    f 7 f 7 f 7 f 7 f 7 f 7 f 7 f f 
    f 7 f 7 f 7 7 f f 7 f 7 7 f f f 
    f 7 f f f f f f f f f f f f f f 
    f 7 7 7 7 7 7 7 7 7 7 f f f f f 
    f f f f f f f f f f f f f 7 f f 
    f f f f f f 7 7 f f 7 f 7 7 f f 
    . f f f 7 7 7 f f 7 7 7 7 f f . 
    . f f 7 7 7 f f f 7 f 7 f f f . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
