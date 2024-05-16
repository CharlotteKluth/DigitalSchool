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
            debug: false,
            tileBias: 20,
        }
    },
    scene: [Preloader, Play],
    scale: {
        mode: Phaser.Scale.FIT,
        zoom: 1,
        width: "100%",
        height: "100%",
    },
}

export default new Phaser.Game(config);