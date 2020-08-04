class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    init(){
        this.scene.launch('UI');
    }
    create() {
     
        const goldPickUpAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 })
       
        /* Difference between sprite and image objects:
        -cannot animate image since it will not have an animate component
        -sprite can be animated
        */
     
        this.chest = new Chest (this, 300, 300, 'items', 0)

        this.wall = this.physics.add.image(500, 100, 'button1')
        this.wall.setImmovable();

        this.player = new Player(this, 32, 32, 'characters', 0);
        

        this.physics.add.collider(this.player, this.wall)
        this.physics.add.overlap(this.player, this.chest, function (player, chest) {
            goldPickUpAudio.play();
            chest.destroy();
        })
        //detects user input on keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        this.player.update(this.cursors);
    }
   
}