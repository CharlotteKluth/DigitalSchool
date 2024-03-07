import { Preloader, Play } from './scenes/index.js';

const config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 1000,
    height: 800,
    backgroundColor: 'rgb(0, 200, 255)',
    physics: {
        fps: 60,
        default: 'arcade',
        arcade: {
            gravity: { y: 1400 },
            //debug: true,
            tileBias: 20,
        }
    },
    scene: [Preloader, Play],
}

export default new Phaser.Game(config);