class Game extends Phaser.Scene {
   constructor() {
      super('Game');
   }

   init() {
      this.scene.launch('UI');
      this.score = 0;
   }

   create() {
      this.pickupSound = this.sound.add('weaponSound', { loop: false, volume: 0.5, delay: 0, mute: false });

      this.makePlayer();
      this.makeChests();
      //this.makeSwords();
      //this.makeWalls();
      //let characters = this.add.image(100, 300, 'characters', 2);

      this.physics.add.collider(this.player, this.w1);
      this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);

      this.cursors = this.input.keyboard.createCursorKeys();
   }

   update() {
      this.player.update(this.cursors);
   }

   makePlayer() {
      this.player = new Player(this, 30, 100, 'characters', 0)
         .setScale(2);
   }

   makeChests() {
      this.chests = this.physics.add.group({ runChildUpdate: true });
      this.chestCoords = [[100, 100], [200, 200], [300, 300], [400, 400]];
      let maxChests = 3;
      for (let i = 0; i < maxChests; i++) {
         this.spawnChest();
      }
   }
   spawnChest() {
      let loc = this.chestCoords[Math.floor(Math.random() * this.chestCoords.length)];
      let chest = new Chest(this, ...loc, 'items', 0);
      this.chests.add(chest);
   }

   makeSwords() {
      this.sword = new Sword(this, 200, 32, 'items', 4);
      this.sword.coins = 20;
   }

   makeWalls() {
      this.w1 = this.physics.add.image(100, 200, 'button1');
      this.w1.setImmovable();
      this.w2 = this.physics.add.image(400, 100, 'button2');
   }

   collectChest(player, chest) {
      console.log(player, chest);
      this.pickupSound.play();
      this.score += chest.coins;
      chest.destroy();
      this.events.emit('updateScore', this.score);
      console.log('overlap item');
      this.time.delayedCall(1000, this.spawnChest, [], this);
   }
}
