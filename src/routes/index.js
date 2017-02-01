import Home from '../containers/Home'
import About from '../containers/About'

export default function configureRoutes() {
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