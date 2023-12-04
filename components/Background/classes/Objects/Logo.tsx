import { Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export default class Logo {
    private object: Group
    private counter: number = 0

    constructor(scene, loader: GLTFLoader) {
        loader.load("/logoUneatlantico.gltf", (gltf) => {
            this.object = gltf.scene
            this.position()
            scene.add(this.object)
        })
        this.update();
    }

    private position() {
        this.object.translateZ(-10)
        if (window.innerWidth > 1500) {
            const ratio = (window.innerWidth - 900) * 1.2 / 660 + 5.6
            this.object.translateY(2)
            this.object.translateX(ratio)
            this.object.scale.set(0.25,0.25,0.25)
        } else {
            this.object.translateY(5)
            this.object.scale.set(0.15,0.15,0.15)
        }
        this.object.rotateY(Math.PI - 5.5)
    }

     private update() {
        this.counter += 0.01
        if (this.object) this.object.rotation.y = (-Math.cos(this.counter))
        requestAnimationFrame(this.update.bind(this))
    }
}