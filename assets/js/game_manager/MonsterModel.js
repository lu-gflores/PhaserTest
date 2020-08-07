class MonsterModel {
    constructor(x, y, gold, spawnerId, frame, health, attack) {
        this.id = `${spawnerId}-${uuid.v4()}`
        this.spawnerId = spawnerId
        this.x = x * 2
        this.y = y * 2
        this.gold = gold
        this.frame =  frame;
        this.health = health
        this.maxHealth =  health
        this.attack = attack
    }
    
    loseHealth() {
        console.log(this.health);
        this.health -= 1;
    }
}