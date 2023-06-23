import Phaser from "phaser";

class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'dino-idle');

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.init();

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  init() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    this
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92)
      .setOrigin(0, 1)
      .setCollideWorldBounds(true);
  }

  update(): void {
    const { space } = this.cursors;
    const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(space);

    const onFloor = (this.body as Phaser.Physics.Arcade.Body).onFloor();

    if (isSpaceJustDown && onFloor) {
      this.setVelocityY(-1600);
    }
  };
}


export default Player;
