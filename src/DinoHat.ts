import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container {

    constructor () {
        super();

        const dino: Sprite = Sprite.from("MyDino");
	
		const hat:Sprite=Sprite.from("MyHat");
		hat.scale.set(0.2, 0.2)
		hat.position.set(70,-50)

		this.addChild(dino);
		this.addChild(hat);
    }
}