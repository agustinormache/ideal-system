import { Container, Sprite, Text } from "pixi.js";

export default class Header extends Container {

    constructor () {
        super();

        const panel = Sprite.from("MyWoodHeader")
        panel.height= 100
        panel.width= 350
        this.addChild(panel)

        const headerTitle: Text = new Text("Nivel Completado", {fontSize:32, fill: 0xF2F2F2, fontFamily:"Trebuchet MS"})
        headerTitle.x = (panel.width - headerTitle.width)/2
        headerTitle.y = (panel.height - headerTitle.height)/2.5
        this.addChild(headerTitle)
    }
}