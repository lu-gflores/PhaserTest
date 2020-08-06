class Monster extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame, id, health, maxHealth) {
        super(scene, x, y, key, frame)
        this.scene =  scene
        this.id = id
        this.health = health
        this.maxHealth = health

        //enable physics
        this.scene.physics.world.enable(this);
        //set immovable if collides
        this.setImmovable(false);
        this.setScale(2);
        //Checks for collisions based on camera
        this.setCollideWorldBounds(true)
        this.scene.add.existing(this)
    }

    makeActive() {
        this.setActive(true)
        this.setVisible(true)
        this.body.checkCollision.none = false;
    }   
    makeInactive() {
        this.setActive(false)
        this.setVisible(false)
        this.body.checkCollision.none = true;
    }
}