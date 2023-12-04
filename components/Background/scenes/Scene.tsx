import { Scene as SceneThree } from "three"
import Camera from "../classes/Camera"
import Lights from "../classes/Ligths"
import Skybox from "../classes/Skybox"
import Loader from "../classes/Loader"
import Logo from "../classes/Objects/Logo"
import MiniLogo from "../classes/Objects/MiniLogo"
import Object1 from "../classes/Objects/Object1"
import Object2 from "../classes/Objects/Object2"
import Object3 from "../classes/Objects/Object3"
import Object4 from "../classes/Objects/Object4"
import Object5 from "../classes/Objects/Object5"

export default class Scene extends SceneThree {
    private camera: Camera

    constructor(renderer) {
        super()
        const loader = new Loader()
        this.camera = new Camera()
        new Lights(this)
        new Skybox(this)
        new Logo(this, loader)
        new Object1(this, loader)
        new Object2(this, loader)
        new Object3(this, loader)
        new Object4(this, loader)
        new Object5(this, loader)
        this.update(renderer)
    }

    private update(renderer) {
        renderer.render(this, this.camera)
        requestAnimationFrame(this.update.bind(this, renderer))
    }
}