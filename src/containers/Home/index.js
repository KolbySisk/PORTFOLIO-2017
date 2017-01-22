import React, {Component} from 'react'
import TechnologyList from '../TechnologyList'
import Intro from '../../components/Intro'
import './styles.scss'

class Home extends Component{
	render(){
		return (
			<section className="home-container">
					<section className="section-1">
						<div className="container">
							<Intro />
							<TechnologyList technologies={this.props.technologies} />
						</div>
					</section>

					<section className="section-2">
						
					</section>
			</section>
		)
	}
}

export default Home