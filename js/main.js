const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   scene: [Boot, UI, Title, Game],
   // scene: {
   //    preload: preload,
   //    create: create,
   //    update: update
   // },
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
