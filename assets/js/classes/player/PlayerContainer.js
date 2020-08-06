const Direction = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    UP: 'UP',
    DOWN: 'DOWN'
}
class PlayerContainer extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y);
        this.scene = scene;
        this.velocity = 160;
        this.currentDirection = Direction.RIGHT
        this.playerAttacking = 'FALSE'
        this.flipX = true
        this.swordHit = false

        //size on container
        this.setSize(64, 64)
        //enable physics
        this.scene.physics.world.enable(this);
    
      
        //Checks for collisions based on camera
        this.body.setCollideWorldBounds(true)
        //add player to exisiting scene
        this.scene.add.existing(this)
        // have camera follow player
        this.scene.cameras.main.startFollow(this)

        //create the player
        this.player =  new Player(this.scene, 0, 0, key, frame)
        this.add(this.player)

        //weapon object
        this.weapon =  this.scene.add.image(40, 0, 'items', 4);
        this.scene.add.existing(this.weapon)
        this.weapon.setScale(1.5)
        this.scene.physics.world.enable(this.weapon)
        this.add(this.weapon)
        this.weapon.alpha = 1 //display only for testing
    }
    update(cursors) {
        this.body.setVelocity(0);

        if (cursors.left.isDown) {
            this.body.setVelocityX(-this.velocity);
            this.currentDirection = Direction.LEFT
            this.weapon.setPosition(-40, 0)
        } else if (cursors.right.isDown) {
            this.currentDirection = Direction.RIGHT
            this.body.setVelocityX(this.velocity);
            this.weapon.setPosition(40, 0)
        }

        if (cursors.up.isDown) {
            this.currentDirection = Direction.UP
            this.body.setVelocityY(-this.velocity);
            this.weapon.setPosition(0, -40)
        } else if (cursors.down.isDown) {
            this.currentDirection = Direction.DOWN
            this.body.setVelocityY(this.velocity);
            this.weapon.setPosition(0, 40)
        }
    }
}