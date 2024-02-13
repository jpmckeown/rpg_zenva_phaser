const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   scene: {
      preload: preload,
      create: create
   }
};

const game = new Phaser.Game(config);

function preload() {
   this.load.image('button1', 'assets/images/ui/blue_button01.png');
   this.load.image('button2', 'assets/images/ui/blue_button02.png');
   this.load.image('items', 'assets/images/items.png');
}

function create() {
   let btn1 = this.add.image(100, 100, 'button1');
   btn1.setOrigin(0, 0);
   let items = this.add.image(100, 300, 'items');
   btn1.setOrigin(0, 0);
   let btn2 = this.add.sprite(300, 100, 'button2');
   btn2.setOrigin(0, 0);

}