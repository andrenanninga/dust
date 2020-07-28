import { GameLoop } from "./GameLoop";

type Options = {
	domElement: HTMLElement;
	ticksPerSecond?: number;
};

class Dust {
	private domElement: HTMLElement;
	private gameLoop: GameLoop;

	constructor({ domElement, ticksPerSecond = 25 }: Options) {
		this.domElement = domElement;

		this.gameLoop = new GameLoop({ ticksPerSecond });
	}

	start() {
		this.gameLoop.start();
	}

	stop() {
		this.gameLoop.stop();
	}
}

export { Dust };
