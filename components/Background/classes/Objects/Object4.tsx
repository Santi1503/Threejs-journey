import { Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export default class Object4 {
    private object: Group
    private counter: number = 0

    constructor(scene, loader: GLTFLoader) {
        loader.load("/zekrom.glb", (gltf) => {
            this.object = gltf.scene
            this.position()
            scene.add(this.object)
        })
        this.update()
    }

    private position() {
        if (window.innerWidth > 900) {
            const ratio = (window.innerWidth - 900) * -1.5 / 660 + 0.5
            this.object.translateZ(36.6)
            this.object.translateY(0.5)
            this.object.translateX(ratio)
        } else {
            this.object.translateZ(38.5)
            this.object.translateY(1.8)
            this.object.translateX(0.4)
        }
        this.object.rotateZ(Math.PI/20)
        this.object.scale.set(1,1,1)
    }

    private update() {
        this.counter += 0.01
        if(this.object) this.object.rotation.y = Math.sin(this.counter) / 7 + 1.2
        requestAnimationFrame(this.update.bind(this))
    }
}