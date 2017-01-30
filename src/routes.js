import Home from './containers/Home'
import About from './containers/About'

export default function createRoutes() {
  return [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/about',
      name: 'about',
      component: About
    }
  ]
}