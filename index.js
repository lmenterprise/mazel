import config from './config.js'
import abertura from './abertura.js'
import sala from './sala.js'
import mapa from './mapa.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)
    this.scene.add('abertura', abertura)
    this.scene.add('sala', sala)
    this.scene.add('mapa', mapa)
    this.scene.star('mapa')
  }
}

window.onload = () => {
  window.game = new Game()
}
