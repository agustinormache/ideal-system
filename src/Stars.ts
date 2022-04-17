import { Container, Sprite} from "pixi.js";

export default class Stars extends Container {

    constructor () {
        super();

        const firstStar = Sprite.from("MyStar")
        firstStar.height= 70
        firstStar.width= 70

        const secondStar = Sprite.from("MyStar")
        secondStar.height= 70
        secondStar.width= 70
        secondStar.x = firstStar.width + 20

        const thirdStar = Sprite.from("MyStar")
        thirdStar.height= 70
        thirdStar.width= 70
        thirdStar.x = secondStar.x + secondStar.width +20

        this.addChild(firstStar)
        this.addChild(secondStar)
        this.addChild(thirdStar)
    }
}