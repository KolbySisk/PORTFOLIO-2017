import React, { Component } from 'react'
import THREELib from 'three-js'
import './styles.scss'

class FloatingSpheres extends Component {
  componentDidMount() {
    let banner = document.querySelector('.site-banner')
    let container = this.refs.container
    let camera, scene, renderer
    let mesh
    let spheres = []
    let mouseX = 0, mouseY = 0
    let direction = -1
    let modes = {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4
    }
    let mode = modes.first
    let clickCount = 0

    document.addEventListener('mousemove', onDocumentMouseMove, false)
    window.addEventListener('resize', onWindowResize, false)
    banner.addEventListener("click", toggleMode)

    setTimeout(() => {
      init()
      animate()
    },1000)

    function toggleMode(){
      clickCount ++
      mode === Object.keys(modes).length ? mode = 1 : mode ++
    }

    function init() {
      let THREE = THREELib()

      camera = new THREE.PerspectiveCamera(60, banner.offsetWidth / banner.offsetHeight, 1, 10000)
      scene = new THREE.Scene()

      let geometry = new THREE.SphereBufferGeometry(11, 32, 16)
      let textureCube = new THREE.CubeTextureLoader()
        .setPath('images/banner-texture/')
        .load([ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ])

      textureCube.mapping = THREE.CubeRefractionMapping

      let material = new THREE.MeshBasicMaterial({ envMap: textureCube, refractionRatio: 0.94, metalness: 1.0, opacity: .7 })

      for (let i = 0; i < 200; i ++) {
        let sphere = new THREE.Mesh(geometry, material)
        sphere.position.x = Math.random() * 10000 - 5000
        sphere.position.y = Math.random() * 10000 - 5000
        sphere.position.z = Math.random() * 10000 - 5000
        sphere.scale.x = sphere.scale.y = sphere.scale.z = Math.random() * 3

        scene.add(sphere)
        spheres.push(sphere)
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

    function moveToPoint(sphere, x, y, speed){
      if(x) sphere.position.x < x ? sphere.position.x += speed : sphere.position.x -= speed
      if(y) sphere.position.y < y ? sphere.position.y += speed : sphere.position.y -= speed
    }

    let timer = 0.01
    let speedOfTime = 0.01
    let timerStop = false

    function moveSpheres(){
      if(clickCount > 14) speedOfTime = .1
      if(clickCount > 21) speedOfTime = .005
      if(!timerStop) timer += speedOfTime

      let speed = 20

      if(mode === modes.first){
        timerStop = false
        spheres.forEach((sphere, i) => {
          sphere.position.x = banner.offsetWidth * Math.cos(timer * direction + i)
          sphere.position.y = banner.offsetHeight * Math.sin(timer * direction + i)
        })
      }

      if(mode === modes.second){
        timerStop = true
        spheres.forEach((sphere, i) => {
          sphere['pausedPosition'] = { x: sphere.position.x, y: sphere.position.y }
        })
      }

      if(mode === modes.third){
        spheres.forEach((sphere, i) => {
          let pointToMoveTo = banner.offsetHeight/2

          function moveTowardsMiddle(){
            moveToPoint(sphere, null, pointToMoveTo, speed)
          }

          if(sphere.position.y < pointToMoveTo-speed || sphere.position.y > pointToMoveTo+speed) moveTowardsMiddle()
        })
      }

      if(mode === modes.fourth){
        spheres.forEach((sphere, i) => {
          if(sphere.position.y < sphere.pausedPosition.y-speed || sphere.position.y > sphere.pausedPosition.y+speed) 
            moveToPoint(sphere, null, sphere.pausedPosition.y, speed)

          if(sphere.position.x < sphere.pausedPosition.x-speed || sphere.position.x > sphere.pausedPosition.x+speed) 
            moveToPoint(sphere, sphere.pausedPosition.x, null, speed)
        })
      }
    }

    function render() {
      let x = (mouseX + 1000 - camera.position.x) * .5
      let y = (mouseY - 500 - camera.position.y) * .9

      moveSpheres()

      camera.position.x += x
      camera.position.y += y
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
  }

  render(){
    return(
      <div ref="container"></div>
    )
  }
}

export default FloatingSpheres