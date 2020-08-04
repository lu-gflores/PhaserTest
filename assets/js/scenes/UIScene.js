class UIScene extends Phaser.Scene {
    constructor() {
        super('UI');
    }
    
    create() {
        this.setUpUIElements();
        this.setupEvents();
    }
    setUpUIElements(){
        this.scoreText = this.add.text(35, 8, 'Coins: 0', {fontSize: '16px', fill:'#fff'})
        //coin icon
        this.coinIcon = this.add.image(15, 15, 'items', 3)
    }
    setupEvents(){

    }
}