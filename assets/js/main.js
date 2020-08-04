const config = {
    type: Phaser.AUTO,
    //specify canvas size element
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
    }
}

const game = new Phaser.Game(config);

function preload() {
    //load method loads a type of asset in Phaser
    //takes 2 arguments: key name and the location of that asset
    this.load.image('button1', 'assets/images/ui/blue_button01.png')
}

function create() {
    const button = this.add.image(100, 100, 'button1');
    button.setOrigin(0.5,0.5)

    this.add.sprite(300, 100, 'button1')
}