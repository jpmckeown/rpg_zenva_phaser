class Title extends Phaser.Scene {
   constructor() {
      super('Title');
   }

   create() {
      this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Zenva RPG', { fontSize: '64px', fill: '#fff' })
         .setOrigin(0.5);

      this.btn1 = this.physics.add.image(this.scale.width / 2, this.scale.height * 0.65, 'button1')
         .setInteractive();

      this.buttonText = this.add.text(0, 0, 'Start', { fontSize: '28px', fill: '#000' });
      Phaser.Display.Align.In.Center(this.buttonText, this.btn1, 0, -2);

      this.btn1.on('pointerdown', () => {
         console.log('pointer down');
         this.scene.start('Game');
      });
      this.btn1.on('pointerover', () => {
         console.log('pointer over');
         this.btn1.setTexture('button2');
      });
      this.btn1.on('pointerout', () => {
         console.log('pointer out');
         this.btn1.setTexture('button1');
      });
   }
}