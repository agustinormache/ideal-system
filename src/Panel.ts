import { Container, Sprite} from "pixi.js";

export default class Panel extends Container {

    constructor () {
        super();

        const woodPanel = Sprite.from("MyWoodPanel")
        woodPanel.width = 500
        woodPanel.height = 500
        this.addChild(woodPanel)

        const paperPanel = Sprite.from("MyPaperPanel")
        paperPanel.width = 450
        paperPanel.height = 450
        paperPanel.x = (woodPanel.width - paperPanel.width)/2
        paperPanel.y = (woodPanel.height- paperPanel.height)/2
        this.addChild(paperPanel)
    }
}