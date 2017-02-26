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
    let direction = -1
    let banner = this.refs.banner
    let modes = {
      normal: 1,
      second: 2
    }
    let mode = modes.normal

    document.addEventListener('mousemove', onDocumentMouseMove, false)
    window.addEventListener('resize', onWindowResize, false)
    banner.addEventListener("click", toggleMode);

    setTimeout(() => {
      init()
      animate()
    })

    function toggleMode(){
      mode === Object.keys(modes).length ? mode = 1 : mode ++
    }

    function init() {
      let THREE = THREELib()
      
      container = document.createElement('div')
      banner.insertBefore(container, banner.firstChild)

      camera = new THREE.PerspectiveCamera(60, banner.offsetWidth / banner.offsetHeight, 1, 10000)
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
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3

        scene.add(mesh)
        spheres.push(mesh)
      }

      renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(banner.offsetWidth, banner.offsetHeight)
      container.appendChild(renderer.domElement)
    }

    function onWindowResize() {
      camera.aspect = banner.offsetWidth / banner.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(banner.offsetWidth, banner.offsetHeight)
    }

    function onDocumentMouseMove(event) {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    function animate() {
      requestAnimationFrame(animate)
      render()
    }

    function moveSpheres(){
      let timer = 0.0001 * Date.now()
      let speed = 5

      if(mode === modes.normal){
        spheres.forEach((sphere, i) => {
          sphere.position.x = banner.offsetWidth * Math.cos(timer * speed * direction + i)
          sphere.position.y = banner.offsetHeight * Math.sin(timer * speed * direction + i)
        })
      }

      if(mode === modes.second){
        speed = 10
        spheres.forEach((sphere, i) => {
          function moveTowardsMiddle(){
            sphere.position.y < 300 ? sphere.position.y += speed : sphere.position.y -= speed
          }

          if(sphere.position.y < 290 || sphere.position.y > 310) moveTowardsMiddle()
        })
      }


      if(mode === modes.third){
        spheres.forEach((sphere, i) => {
          function moveTowardsMouse(){
          }

          moveTowardsMouse()
        })
      }
    }

    function render() {
      let x = (mouseX / banner.offsetWidth) * 100
      let y = (mouseY / banner.offsetHeight) * 100

      moveSpheres()

      camera.position.x += (mouseX + 1000 - camera.position.x) * .9 + 30
      camera.position.y += (mouseY - 50 - camera.position.y) * .9 + 30

      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
  }

  render(){
    return(
      <header className="site-header">
        <div className="site-banner" ref="banner">
          <img src={'/images/logo.png'} alt="my logo - kolby sisk :)#" className="site-banner__logo" draggable="false" ref="logo"/>
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