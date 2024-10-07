export default {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    parent: 'game-conteiner',
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game-container',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 450
    }
}