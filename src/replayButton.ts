import { Container, Sprite, Text} from "pixi.js";

export default class ReplayButton extends Container {

    constructor () {
        super();

        const replayButton = Sprite.from("MyBlueSign")
        const replayText:Text = new Text("REPETIR", {fontSize:18, fill: 0xF2f2f2, fontFamily:"Trebuchet MS"})
        replayText.x = (replayButton.width - replayText.width)/2
        replayText.y = (replayButton.height - replayText.height)/2.5

        this.addChild(replayButton)
        this.addChild(replayText)
    }
}