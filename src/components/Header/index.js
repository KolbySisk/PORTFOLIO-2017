import React, { Component } from 'react'
import Parallaxer from '../../containers/Parallaxer'
import THREELib from 'three-js'
import './styles.scss'

class Header extends Component {
  componentDidMount() {
    let container

    let camera, scene, renderer

    let mesh, lightMesh, geometry
    let spheres = []

    let directionalLight, pointLight

    let mouseX = 0, mouseY = 0

    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2

    let direction = -1

    let banner = document.querySelector('.site-banner')

    document.addEventListener('mousemove', onDocumentMouseMove, false)

    init()
    animate()

    function init() {
      let THREE = THREELib()
      
      container = document.createElement('div')
      banner.insertBefore(container, banner.firstChild)

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000)
      camera.position.z = 3200

      scene = new THREE.Scene()

      let geometry = new THREE.SphereBufferGeometry(11, 32, 16)
      let textureCube = new THREE.CubeTextureLoader()
        .setPath('banner-texture/')
        .load([ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ])

      textureCube.mapping = THREE.CubeRefractionMapping

      let material = new THREE.MeshBasicMaterial({ envMap: textureCube, refractionRatio: 0.94, metalness: 1.0 })

      for (let i = 0; i < 200; i ++) {
        let mesh = new THREE.Mesh(geometry, material)

        mesh.position.x = Math.random() * 10000 - 5000
        mesh.position.y = Math.random() * 10000 - 5000
        mesh.position.z = Math.random() * 10000 - 5000
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1

        scene.add(mesh)
        spheres.push(mesh)
      }

      renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, 500)
      container.appendChild(renderer.domElement)

      window.addEventListener('resize', onWindowResize, false)
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / 500
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, 500)
    }

    function onDocumentMouseMove(event) {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    function animate() {
      requestAnimationFrame(animate)
      render()
    }

    function render() {
      let timer = 0.0001 * Date.now()
      let speed = 2
      let x = (mouseX / (banner.offsetWidth/2) - 1) * 1000
      let y = (mouseY / (banner.offsetHeight/2) - 1) * 1000

      spheres.forEach((sphere, i) => {
        sphere.position.x = (banner.offsetWidth/2) * Math.cos(timer * speed * direction + i)
        sphere.position.y = (banner.offsetHeight * 5) * Math.sin(timer * speed * direction + i)
      })

      camera.position.x += (x - camera.position.x) * .05
      camera.position.y += (y - camera.position.y) * .05

      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
  }

  render(){
    return(
      <header className="site-header">
        <div className="site-banner">
          <img src={'/images/logo.png'} alt="my logo - kolby sisk :)#" className="site-banner__logo" draggable="false"/>
          <Parallaxer>
            <picture>
              <source srcSet="/images/home-banner.jpg" media="(min-width: 1280px)" />
              <source srcSet="/images/home-banner__medium.jpg" media="(min-width: 768px)" />
              <img src="/images/home-banner__small.jpg" className="site-banner__image" alt="sweet banner" />  
            </picture>
          </Parallaxer>
        </div>
      </header>
    )
  }
}

export default Header