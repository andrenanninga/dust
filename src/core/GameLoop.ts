type Options = {
	ticksPerSecond?: number;
};

class GameLoop {
	private ticksPerSecond: number;
	public isRunning: boolean = false;

	private last: number = 0;
	private accumulator: number = 0;

	private animationRequest: number | undefined;

	constructor({ ticksPerSecond = 30 }: Options = {}) {
		this.ticksPerSecond = ticksPerSecond;

		this.update = this.update.bind(this);
	}

	start() {
		this.isRunning = true;
		this.last = performance.now();
		this.update();
	}

	stop() {
		this.isRunning = false;

		if (this.animationRequest) {
			cancelAnimationFrame(this.animationRequest);
			this.animationRequest = undefined;
		}
	}

	update() {
		this.animationRequest = requestAnimationFrame(this.update);

		const now = performance.now();
		const delta = now - this.last;
		this.last = now;

		if (delta > 1000) {
			return;
		}

		const step = 1000 / this.ticksPerSecond;
		this.accumulator += delta;

		while (this.accumulator >= step) {
			// update
			console.log("update", step);

			this.accumulator -= step;
		}

		// render
		console.log("render");
	}
}

export { GameLoop };
