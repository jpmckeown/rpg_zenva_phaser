class UIbutton extends Phaser.GameObjects.Container {
   constructor(scene, x, y, key, hoverKey, text, targetCallback) {
      super(scene, x, y);
      Object.assign(this, { scene, x, y, key, hoverKey, text, targetCallback });
      this.createButton();
      scene.add.existing(this);
   }

   createButton() {
      this.btn1 = this.scene.add.image(0, 0, 'button1')
         .setScale(1.5)
         .setInteractive();

      this.buttonText = this.scene.add.text(0, 0, this.text, { fontSize: '28px', fill: '#000' });

      Phaser.Display.Align.In.Center(this.buttonText, this.btn1, 0, -2);

      this.add(this.btn1);
      this.add(this.buttonText);

      this.btn1.on('pointerdown', () => {
         console.log('pointer down');
         this.targetCallback();
      });

      this.btn1.on('pointerover', () => {
         console.log('pointer over');
         this.btn1.setTexture(this.hoverKey);
      });

      this.btn1.on('pointerout', () => {
         console.log('pointer out');
         this.btn1.setTexture(this.key);
      });
   }
}
