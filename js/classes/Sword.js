class Sword extends Phaser.Physics.Arcade.Image {
   constructor(scene, x, y, key, frame) {
      super(scene, x, y, key, frame);
      this.scene = scene;
      this.magic = 3;
      this.scene.physics.world.enable(this);
      this.scene.add.existing(this);
   }
}
