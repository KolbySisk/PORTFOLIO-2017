import React from 'react'
import TechnologyList from '../TechnologyList'
import Intro from '../../components/Intro'
import Outro from '../../components/Outro'
import Stuff from '../Stuff'
import StickyTitle from '../../components/StickyTitle'
import './styles.scss'

const Home = ({technologies}) => (
  <section className="home-container">
		<section className="home__section-1">
			<div className="container flex">
				<Intro />
				<TechnologyList technologies={technologies} />
			</div>
		</section>
		<section className="home__section-2">
			<div className="container">
	      <StickyTitle title="Stuff"/>
				<Stuff />
			</div>
		</section>
		<section className="home__section-3">
			<Outro />
		</section>
	</section>
)

export default Home