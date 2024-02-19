class Chest extends Phaser.Physics.Arcade.Image {
   constructor(scene, x, y, key, frame) {
      super(scene, x, y, key, frame);
      this.scene = scene;
      // Object.assign(this, { scene, x, y, key, frame });
      this.coins = 10;
      this.scene.physics.world.enable(this);
      this.scene.add.existing(this);
   }
}