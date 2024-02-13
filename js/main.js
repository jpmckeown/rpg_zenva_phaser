const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   scene: {
      preload: preload,
      create: create,
      update: update
   },
   physics: {
      default: 'arcade',
      arcade: {
         debug: true,
         gravity: {
            y: 0
         }
      }
   }
};

const game = new Phaser.Game(config);

function preload() {
   this.load.image('button1', 'assets/images/ui/blue_button01.png');
   this.load.image('button2', 'assets/images/ui/blue_button02.png');
   this.load.spritesheet('items', 'assets/images/items.png', { frameWidth: 32, frameHeight: 32 });
   this.load.spritesheet('characters', 'assets/images/characters.png', { frameWidth: 32, frameHeight: 32 });
}

function create() {
   let btn1 = this.add.image(100, 100, 'button1');
   btn1.setOrigin(0, 0);
   let items = this.add.image(100, 300, 'items', 1);
   let characters = this.add.image(100, 300, 'characters', 0);
   this.player = this.physics.add.image(32, 32, 'characters', 0);

   this.physics.add.image(400, 100, 'button2');
   this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
   if (this.cursors.left.isDown) {
      this.player.setVelocityX(-30);
   }
   else if (this.cursors.right.isDown) {
      this.player.setVelocityX(30);
   }
   else {
      this.player.setVelocityX(0);
   }
   if (this.cursors.up.isDown) {
      this.player.setVelocityY(-30);
   }
   else if (this.cursors.down.isDown) {
      this.player.setVelocityY(30);
   }
   else {
      this.player.setVelocityY(0);
   }
}