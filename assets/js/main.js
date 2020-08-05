const config = {
    type: Phaser.AUTO,
    //specify canvas size element
    width: 800,
    height: 600,
    scene:[
        BootScene,
        TitleScene,
        GameScene,
        UIScene
    ],
    physics: {
        default: 'arcade', //physics engine
        arcade: {
            debug: true, //set to true when testing the physics of the game
            gravity: {
                y: 0,
            }
        }
    },
    pixelArt: true,
    roundPixels: true
}

const game = new Phaser.Game(config);
