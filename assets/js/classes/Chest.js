class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame, coins, id) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.coins = coins;//coin amount in chest
        this.id = id;
        //enable physics
        this.scene.physics.world.enable(this);

        //add player to exisiting scene
        this.scene.add.existing(this)

        //scale chest
        this.setScale(2)
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