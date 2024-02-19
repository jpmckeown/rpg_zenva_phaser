class Game extends Phaser.Scene {
   constructor() {
      super('Game');
   }

   init() {
      this.scene.launch('UI');
   }

   create() {
      this.pickupSound = this.sound.add('weaponSound', { loop: false, volume: 0.5, delay: 0, mute: false });

      this.w1 = this.physics.add.image(100, 100, 'button1');
      this.w1.setImmovable();
      this.w2 = this.physics.add.image(400, 100, 'button2');

      this.makePlayer();
      this.makeChests();
      this.makeSwords();

      this.physics.add.collider(this.player, this.w1);
      this.physics.add.overlap(this.player, this.sword, this.collectChest, null, this);

      //    function (player, items) {
      //    collectChest(this.player, this.sword)
      // });

      this.cursors = this.input.keyboard.createCursorKeys();
   }

   update() {
      this.player.update(this.cursors);
   }

   makePlayer() {
      this.player = new Player(this, 150, 32, 'characters', 0);

      console.log(this.player.speed);
      let characters = this.add.image(100, 300, 'characters', 2);
   }

   makeChests() {
      //this.chests
      this.chest = new Chest(this, 200, 32, 'items', 0);
      this.chest.coins = 20;
   }

   makeSwords() {
      // this.items = this.physics.add.image(80, 50, 'items', 4);
      this.sword = new Sword(this, 200, 32, 'items', 4);
      this.sword.coins = 20;
   }

   collectChest(player, chest) {
      this.pickupSound.play();
      chest.destroy();
      this.events.emit('updateScore', chest.coins);
      console.log('overlap item');
   }
}
