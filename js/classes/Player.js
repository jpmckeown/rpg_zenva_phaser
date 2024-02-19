class Player extends Phaser.Physics.Arcade.Image {
   constructor(scene, x, y, key, frame) {
      super(scene, x, y, key, frame);
      this.scene = scene;
      this.speed = 120;
      this.scene.physics.world.enable(this);
      this.setImmovable(false);
      this.setCollideWorldBounds(true);
      this.scene.add.existing(this);
   }

   update(cursors) {
      if (cursors.left.isDown) {
         this.body.setVelocityX(-this.speed);
      }
      else if (cursors.right.isDown) {
         this.setVelocityX(30);
      }
      else {
         this.setVelocityX(0);
      }
      if (cursors.up.isDown) {
         this.setVelocityY(-30);
      }
      else if (cursors.down.isDown) {
         this.setVelocityY(30);
      }
      else {
         this.setVelocityY(0);
      }
   }
}