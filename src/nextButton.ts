import { Container, Sprite, Text} from "pixi.js";

export default class NextButton extends Container {

    constructor () {
        super();

        const nextButton = Sprite.from("MyGreenSign")
        const nextText:Text = new Text("SIGUIENTE", {fontSize:18, fill: 0xF2f2f2, fontFamily:"Trebuchet MS"})
        nextText.x = (nextButton.width - nextText.width)/2
        nextText.y = (nextButton.height - nextText.height)/2.5

        this.addChild(nextButton)
        this.addChild(nextText)
    }
}