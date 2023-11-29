import { Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export default class Object2 {
    private object: Group

    constructor(scene, loader: GLTFLoader) {
        loader.load("/groudon.glb", (gltf) => {
            this.object = gltf.scene
            this.position()
            scene.add(this.object)
        })
    }

    private position() {
        this.object.translateY(-2)
        this.object.translateX(-9)
        this.object.translateZ(11.5)

        this.object.rotateY(Math.PI/6)
        this.object.scale.set(0.65,0.65,0.65)
    }
}
