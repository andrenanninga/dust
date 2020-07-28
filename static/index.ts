import { Dust } from "~/src/core";

const domElement = document.querySelector<HTMLElement>(".dust");

if (!domElement) {
	throw new Error("domElement .dust not found");
}

const dust = new Dust({ domElement, ticksPerSecond: 1 });
dust.start();

// @ts-ignore
window.dust = dust;
