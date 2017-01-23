import React, {Component} from 'react'
import TechnologyList from '../TechnologyList'
import Intro from '../../components/Intro'
import Stuff from '../Stuff'
import './styles.scss'

class Home extends Component{
	render(){
		return (
			<section className="home-container">
					<section className="home__section-1">
						<div className="container flex">
							<Intro />
							<TechnologyList technologies={this.props.technologies} />
						</div>
					</section>
					<section className="home__section-2">
						<div className="container">
							<Stuff />
						</div>
					</section>
			</section>
		)
	}
}

export default Home