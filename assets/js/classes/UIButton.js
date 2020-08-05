class UIButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallBack) {
        super(scene, x, y);
        this.scene = scene; //scene this container will be added to
        this.x = x; //x positin of our container
        this.y = y;//y position of our container 
        this.key = key; // background image of our button
        this.hoverKey = hoverKey; // image that will be displayed when hovered
        this.text = text; // text displayed in button
        this.targetCallBack = targetCallBack; //callback function when the player clicks the button

        //create ui button
        this.createButton();
        this.scene.add.existing(this); //add this container to phaser scene
    }

    createButton() {
        this.button = this.scene.add.image(0, 0, 'button1')
        this.button.setInteractive();
        this.button.setScale(1.4)

        //create button text
        this.buttonText = this.scene.add.text(0, 0, this.text, { fontSize: '26px', fill: '#fff' });
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        this.add(this.button)
        this.add(this.buttonText)


        //event listeners
        this.button.on('pointerdown', () => {
            this.targetCallBack()
        })
        this.button.on('pointerover', () => {
            this.button.setTexture(this.hoverKey)
        })
        this.button.on('pointerout', () => {

            this.button.setTexture(this.key)
        })
    }
}


