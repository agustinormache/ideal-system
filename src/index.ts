import { Application, Sprite, Loader } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

// Carga previamente todas estas imagenes
Loader.shared.add({url: "./dinosaurio.jpg", name: "MyDino"})
Loader.shared.add({url: "./clampy.png", name: "Clampy"})

// Ejecuta el render en el navegador una vez cargadas las imagenes
Loader.shared.onComplete.add(()=>{
	const clampy: Sprite = Sprite.from("MyDino");

	console.log("Hola mundo", clampy.width, clampy.height)

	// clampy.anchor.set(0.5);

	clampy.x = 0;
	clampy.y = 0;

	app.stage.addChild(clampy);
})

Loader.shared.load()