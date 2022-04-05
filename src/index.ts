import { Application, Sprite, Loader, Container} from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth-gameWidth)/2);
	const marginVertical = Math.floor((window.innerHeight-gameHeight)/2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
})
window.dispatchEvent(new Event("resize"))


// Carga previamente todas estas imagenes
Loader.shared.add({url: "./dinosaurio.png", name: "MyDino"})
Loader.shared.add({url: "./hat.png", name: "MyHat"})
Loader.shared.add({url: "./baston.png", name: "MyWalkingStick"})

// Ejecuta el render en el navegador una vez cargadas las imagenes
Loader.shared.onComplete.add(()=>{
	const dino: Sprite = Sprite.from("MyDino");
	
	const hat:Sprite=Sprite.from("MyHat");
	hat.scale.set(0.2, 0.2)
	hat.position.set(70,-50)

	const stick: Sprite = Sprite.from("MyWalkingStick");
	stick.rotation = 120;
	stick.scale.set(0.7, 0.7)
	stick.position.set(170,300)

	const dinoWidthHat: Container = new Container();
	dinoWidthHat.scale.set(0.5);
	dinoWidthHat.x = 200;
	dinoWidthHat.y = 300;

	// console.log(hat.toGlobal(new Point()));
	// console.log(hat.parent.toGlobal(hat.position));

	//640 x 360
	//const aux = hat.parent.toLocal(new Point(0,0));
	//hat.position.x = aux.x;
	//hat.position.y = aux.y;
	

	// El orden de los componentes indica si están delante o detrás
	dinoWidthHat.addChild(stick);
	dinoWidthHat.addChild(dino);
	dinoWidthHat.addChild(hat);
	app.stage.addChild(dinoWidthHat);
})

Loader.shared.load()