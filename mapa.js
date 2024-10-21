export default class mapa extends Phaser.Scene {
  constructor () {
    super('mapa')
  }

  preload () {
    this.load.tilemapTiledJSON('mapa', 'assets/mapa/mapa.json')
    this.load.image('estrutura', 'assets/mapa/estrutura.png')
    this.load.image('grama', 'assets/mapa/grama.png')

    this.load.spritesheet('personagem', 'assets/menino_sem_picareta.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('cima', 'assets/cima.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('baixo', 'assets/baixo.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('direita', 'assets/direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('esquerda', 'assets/esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.tilemapMapa = this.make.tilemap({ key: 'mapa' })

    this.tilesetEstrutura = this.tilemapMapa.addTilesetImage('estrutura')
    this.tilesetGrama = this.tilemapMapa.addTilesetImage('grama')

    this.layerChao = this.tilemapMapa.createLayer('chao', [this.tilesetGrama], 0, 0)
    this.layerSombra = this.tilemapMapa.createLayer('sombras', 0, 0)
    this.layerMoveis = this.tilemapMapa.createLayer('moveis', [this.tilesetEstrutura], 0, 0)

    this.anims.create({
      key: 'parado',
      frames: [{ key: 'personagem', frame: 15 }],
      frameRate: 1
    })

    this.anims.create({
      key: 'andar-direita',
      frames: this.anims.generateFrameNumbers('personagem', { start: 88, end: 96 }),
      frameRate: 10,
      repeat: -1
    })

    this.personagem = this.physics.add.sprite(50, 225, 'personagem', 15)

    this.cima = this.add.sprite( 70, 300, 'cima', 0)
    this.baixo = this.add.sprite(70, 390, 'baixo', 0)
    this.esquerda = this.add.sprite(650, 390, 'esquerda', 0)
    this.direita = this.add.sprite(750, 390, 'direita', 0)
  }
}
