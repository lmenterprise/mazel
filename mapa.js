export default class mapa extends Phaser.Scene {
  constructor () {
    super('mapa')
  }

  preload () {
    this.load.tilemapTiledJSON('mapa', 'assests/mapa/mapa.json')
    this.load.image('estrutura', 'assests/mapa/estrutura.png')
    this.load.image('grama', 'assests/mapa/Brick_Texture.png')

    this.load.spritesheet('personagem', 'assets/menino_sem_picareta.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.tilemapMapa = this.make.tilemap({ key: 'mapa' })

    this.tilesetEstrutura = this.tilemapMapa.addTilersetImage('estrutura')
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
      .setInteractive()
      .on('pointerdown', () => {
        if (this.personagem.body.velocity.x === 0) {
          this.personagem.setVelocityX(100)
          this.personagem.anims.play('andar-direita')
        } else {
          this.personagem.setVelocityX(0)
          this.personagem.anims.play('parado')
        }
      })
  }
}
