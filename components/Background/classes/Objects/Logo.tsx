import { Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export default class Logo {
    private object: Group
    private counter: number = 0

    constructor(scene, loader: GLTFLoader) {
        loader.load("/uneatlantico.glb", (gltf) => {
            this.object = gltf.scene
            this.position()
            scene.add(this.object)
        })
        this.update()
    }

    private position() {
        this.object.translateZ(-10)
        if (window.innerWidth > 900) {
            const ratio = (window.innerWidth - 900) * 1.2 / 660 + 5.6
            this.object.translateY(4)
            this.object.translateX(ratio)
        } else {
            this.object.translateY(7)
        }
        this.object.scale.set(0.01,0.01,0.01)
    }

    private update() {
        this.counter += 0.01
        if (this.object) this.object.rotation.y = Math.sin(this.counter) / 8
        requestAnimationFrame(this.update.bind(this))
    }
}