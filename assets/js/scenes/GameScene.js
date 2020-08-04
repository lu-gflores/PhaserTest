class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    init(){
        this.scene.launch('UI');
    }
    create() {
     
        this.createAudio();
        this.createChest();
        this.createWalls();
        this.createPlayer();
        this.addCollisions();
        this.createInput();
    }

    update() {
        this.player.update(this.cursors);
    }
    createAudio() {
        this.goldPickUpAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 })
       
    }

    createPlayer() {
        this.player = new Player(this, 32, 32, 'characters', 0);
    }

    createChest() {
        this.chest = new Chest (this, 300, 300, 'items', 0)
    }

    createWalls() {
        this.wall = this.physics.add.image(500, 100, 'button1')
        this.wall.setImmovable();
    }

    createInput(){
        //detects user input on keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.wall)
        this.physics.add.overlap(this.player, this.chest, this.collectChest, null, this) 
    }
    
    collectChest(player, chest) {
        this.goldPickUpAudio.play();
        //updates score in UI
        this.events.emit('updateScore', chest.coins);
        chest.destroy();
    }
}