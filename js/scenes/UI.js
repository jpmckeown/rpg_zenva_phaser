class UI extends Phaser.Scene {
   constructor() {
      super('UI');
   }

   create() {
      this.setupElements();
      this.setupEvents();
   }

   setupElements() {
      this.coinText = this.add.text(35, 10, 'Coins: 0', { fontSize: '16px', fill: '#fff' });
      this.coinIcon = this.add.image(15, 15, 'items', 3);
   }
   setupEvents() {

   }
}