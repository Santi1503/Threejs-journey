import { AnimationMixer, Clock, Group } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export default class MiniLogo {
    private object: Group
    private clock = new Clock()
    private animation: AnimationMixer

    constructor(scene, loader: GLTFLoader) {
        this.clock = new Clock()
        loader.load("/pokeball.glb", (gltf) => {
            this.object = gltf.scene
            this.position()
            this.animate(gltf)
            scene.add(this.object)
        })
        this.update()
    }

    private position() {
        if (window.innerWidth > 900) {
            const ratio = (window.innerWidth - 900) * 2.4 / 660 + 14
            this.object.translateY(-1)
            this.object.translateX(ratio)
            this.object.translateZ(-23)
            this.object.rotateY(-Math.PI/1.5)
        } else {
            this.object.translateY(5.8)
            this.object.translateZ(-20)
            this.object.rotateY(-Math.PI/2)
        }
        this.object.rotateZ(Math.PI/20)
        this.object.scale.set(2,2,2)
    }

    private update() {
        const delta = this.clock.getDelta()
        if (this.object) this.animation.update(delta)
        requestAnimationFrame(this.update.bind(this))
    }

    private animate(gltf) {
        this.animation = new AnimationMixer(this.object)
        const action = this.animation.clipAction(gltf.animations[0])
        action.play()
    }
}