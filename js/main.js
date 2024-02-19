const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   scene: [Boot, UI, Title, Game],
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
