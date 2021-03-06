class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }
   
    create() {
        //create title
        this.titleText = this.add.text(
            this.scale.width /  2, 
            this.scale.height / 2, 
            'Zenva MMORPG', 
            {fontSize: '64px',
            fill: '#fff'
        });
        this.titleText.setOrigin(0.5);

        this.startGameButton =  new UIButton(this, 
            this.scale.width /  2, 
            this.scale.height * 0.65, 
            'button1', 
            'button2', 
            'Start',
            this.startScene.bind(this, 'Game')
            );
        }

        startScene(targetScene) {
            this.scene.start(targetScene)
        }



        // this.button = this.add.image(this.scale.width /  2, this.scale.height * 0.65, 'button1')
        // this.button.setInteractive();

        // this.buttonText = this.add.text(0, 0, 'Start', {fontSize: '26px', fill:'#fff'})
        // Phaser.Display.Align.In.Center(this.buttonText, this.button);

        // //event listeners
        // this.button.on('pointerdown', () => {
        //     console.log('pointer down')
        //     this.scene.start('Game');
        // })
        // this.button.on('pointerover', () => {
        //     this.button.setTexture('button2')
        // })
        // this.button.on('pointerout', () => {
           
        //     this.button.setTexture('button1')
        // })
    }
