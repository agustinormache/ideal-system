import {AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane } from 'pixi.js'
// import { DinoHat } from './DinoHat'

export class Scene extends Container {
	constructor() 
		{
			super()

			// Class extending from container
			// const dinoWithHat: DinoHat=new DinoHat();

			// 	dinoWithHat.scale.set(0.5);
			// 	dinoWithHat.x = 200;
			// 	dinoWithHat.y = 300;

			// 	this.addChild(dinoWithHat)

				// Animated Sprite
				const dinoAnimated: AnimatedSprite = new AnimatedSprite (
					[
						Texture.from("FrogRun1"),
						Texture.from("FrogRun2"),
						Texture.from("FrogRun3"),
						Texture.from("FrogRun4"),
						Texture.from("FrogRun5")
					], true
				)
				dinoAnimated.animationSpeed = 0.15
				dinoAnimated.play();
				this.addChild(dinoAnimated)

				/* 
				Procurar dibujar siempre en la posición (0,0) para después moverlo
				con position.set(x,y)
				*/
				const myGraph: Graphics = new Graphics();
				myGraph.lineStyle({color:0xFFffFF, width: 10, alpha:1})
				myGraph.moveTo(0, 0)
				myGraph.lineTo(300,500)
				myGraph.lineTo(300,100)
				myGraph.lineTo(0, 0)

				myGraph.clear();

				myGraph.lineStyle({color:0xFFffFF, width: 10, alpha:1})
				myGraph.beginFill(0x00FF00,1)
				myGraph.drawCircle(0,0,100);
				myGraph.endFill();

				myGraph.drawCircle(50,50,100);

				myGraph.position.set(1280/2, 720/2)
				this.addChild(myGraph)

				// Texto
				const myText: Text = new Text("Hello World", {fontSize:108, fill: 0xFF0000, fontFamily:"Comic Sans MS"})
				myText.text = "Running frog"
				myText.position.x = 500
				myText.angle = 75
				myText.scale.set(1)
				this.addChild(myText)

				// Nine-Slice-Plane
				// const panel = Sprite.from("Panel")
				const panel = new NineSlicePlane(
					Texture.from("Panel"),
					35,35,35,35
					)
				this.addChild(panel)
				panel.width = 500;
				panel.height = 300;
				panel.scale.set(2)
				panel.position.x = 100;
				panel.position.y = 100;
		}  
}