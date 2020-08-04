const config = {
    type: Phaser.AUTO,
    //specify canvas size element
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
    },
    physics: {
        default: 'arcade', //physics engine
        arcade: {
            debug: true, //set to true when testing the physics of the game
            gravity: {
                y: 0,
            }
        }
    }
}

const game = new Phaser.Game(config);

function preload() {
    //load method loads a type of asset in Phaser
    //takes 2 arguments: key name and the location of that asset
    this.load.image('button1', 'assets/images/ui/blue_button01.png');
    this.load.spritesheet('items', 'assets/images/items.png', {frameWidth: 32 , frameHeight: 32});

}

function create() {
    const button = this.add.image(100, 100, 'button1') //cant animate image
    button.setOrigin(0.5,0.5)
    /* Difference between sprite and image objects:
    -cannot animate image since it will not have an animate component
    -sprite can be animated
    */
    this.add.sprite(300, 100, 'button1')
    this.add.image(300, 300, 'items', 0)
    this.physics.add.image(500, 100, 'button1')

}