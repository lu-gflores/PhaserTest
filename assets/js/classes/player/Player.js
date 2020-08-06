class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
       

        //enable physics
        this.scene.physics.world.enable(this);
        //set immovable if collides
        this.setImmovable(true);
        this.setScale(2);
        //add player to exisiting scene
        this.scene.add.existing(this)
      
    }
    
}