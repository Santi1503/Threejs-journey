import { useEffect } from "react"
import { Scene, WebGL1Renderer, PerspectiveCamera, Camera, BoxGeometry, MeshBasicMaterial, Mesh, SphereGeometry, TextureLoader, MeshPhongMaterial, BackSide, AmbientLight, HemisphereLight } from "three"

function HomePage() {
    useEffect(() => {
        const scene = new Scene()

        const renderer = new WebGL1Renderer({
            antialias: true,
            canvas: document.getElementById("bg")
        })

        const camera = new PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 )

        camera.position.z = 6

        const geometry = new BoxGeometry(1,1,1)
        const material = new MeshBasicMaterial({color: 0xffffff })
        const cube = new Mesh(geometry, material)
        scene.add(cube)

        const skyGeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const texture = loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: texture
        })
        const skybox = new Mesh(skyGeometry, material2)
        scene.add(skybox)
        skybox.material.side = BackSide

        scene.add(new AmbientLight(0xffffff, 0.8))
        scene.add(new HemisphereLight(0xffffff, 0.8))


        renderer.setSize(window.innerWidth, window.innerHeight)

        function animate() {
            cube.rotation.x +=0.01
            cube.rotation.y +=0.01

            renderer.render(scene, camera)
            window.requestAnimationFrame(animate)
        }
        animate()

    }, [])
    return <canvas id="bg" />
}

export default HomePage