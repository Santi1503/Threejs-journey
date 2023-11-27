import { Mesh, SphereGeometry, TextureLoader, MeshPhongMaterial, BackSide, } from "three"


export default class Skybox {
    constructor(scene) {
        const skyGeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const texture = loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: texture
        })
        const skybox = new Mesh(skyGeometry, material2)
        skybox.material.side = BackSide
        scene.add(skybox)
    }
}