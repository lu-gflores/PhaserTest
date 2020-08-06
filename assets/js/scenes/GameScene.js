class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    init() {
        this.scene.launch('UI');
        this.score = 0;
    }
    create() {
        this.createMap();
        this.createAudio();
        this.createGroups();
        this.createInput();

        this.createGameManager();

    }

    update() {
        if (this.player) this.player.update(this.cursors);
    }
    createAudio() {
        this.goldPickUpAudio = this.sound.add('goldSound', { loop: false, volume: 0.2 })

    }

    createPlayer(location) {
        this.player = new Player(this, location[0] * 2, location[1] * 2, 'characters', 0);
    }

    createGroups() {
        this.chests = this.physics.add.group();
        this.monsters = this.physics.add.group();

    }
    spawnChest(chestObject) {
        let chest = this.chests.getFirstDead();

        if (!chest) {
            chest = this.chest = new Chest(this, chestObject.x * 2, chestObject.y * 2, 'items', 0, chestObject.gold, chestObject.id)
            this.chests.add(chest) //adding chest to chest group  
        } else {
            chest.coins = chestObject.gold
            chest.id = chestObject.id
            chest.setPosition(chestObject.x * 2, chestObject.y * 2);
            chest.makeActive();
        }
    }

    spawnMonster(monsterObject) {

        let monster = this.monsters.getFirstDead();

        if (!monster) {
            monster = new Monster(this, monsterObject.x * 2, monsterObject.y * 2, 'monsters', monsterObject.frame, monsterObject.health, monsterObject.maxHealth)
            this.monsters.add(monster) //adding chest to chest group  
        } else {
            monster.id = monsterObject.id
            monster.health = monsterObject.health
            monster.maxHealth = monsterObject.maxHealth
            monster.setTexture('monsters', monsterObject.frame)
            monster.setPosition(monsterObject.x * 2, monsterObject.y * 2);
            monster.makeActive();
        }
    }

    createInput() {
        //detects user input on keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.map.blockedLayer)
        this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this)
        this.physics.add.collider(this.monsters, this.map.blockedLayer)
        this.physics.add.overlap(this.player, this.monsters, this.enemyOverlap, null, this)

    }
    enemyOverlap(player, enemy){
        enemy.makeInactive()
        this.events.emit('destroyEnemy', enemy.id)
    }
    collectChest(player, chest) {
        this.goldPickUpAudio.play();

        this.score += chest.coins;

        //updates score in UI
        this.events.emit('updateScore', this.score);

        chest.makeInactive();

        this.events.emit('pickUpChest', chest.id)
    }
    createMap() {
        this.map = new Map(this, 'map', 'background', 'background', 'blocked')
    }
    createGameManager() {
        this.events.on('spawnPlayer', (location) => {
            this.createPlayer(location);
            this.addCollisions();
        })
        this.events.on('chestSpawned', (chest) => {
            this.spawnChest(chest)
        })

        this.events.on('monsterSpawned', (monster) => {
            this.spawnMonster(monster)
        })
        this.gameManager = new GameManager(this, this.map.map.objects)
        this.gameManager.setup();

    }
}