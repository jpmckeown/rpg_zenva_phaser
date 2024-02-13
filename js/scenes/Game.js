class Game extends Phaser.Scene {
   constructor() {
      super('Game');
   }

   create() {
      const pickupSound = this.sound.add('weaponSound', { loop: false, volume: 0.5, delay: 0, mute: false });

      this.w1 = this.physics.add.image(100, 100, 'button1');
      this.w1.setImmovable();

      // this.items = this.physics.add.image(80, 50, 'items', 4);
      this.sword = new Player(this, 32, 32, 'items', 4);
      this.player = new Player(this, 32, 32, 'characters', 0);

      let characters = this.add.image(100, 300, 'characters', 2);

      this.w2 = this.physics.add.image(400, 100, 'button2');
      this.physics.add.collider(this.player, this.w1);
      this.physics.add.overlap(this.player, this.sword, function (player, items) {
         pickupSound.play();
         items.destroy();
         console.log('overlap item');
      });

      this.cursors = this.input.keyboard.createCursorKeys();
   }

   update() {
      this.player.update(this.cursors);
   }

}
