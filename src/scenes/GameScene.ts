import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  isGameRunning: boolean = false;

  constructor(key: string) {
    super(key);
  }

  get gameHeight() {
    return this.game.config.height as number;
  }

  get gameWidth() {
    return this.game.config.width as number;
  }
}

export default GameScene;
