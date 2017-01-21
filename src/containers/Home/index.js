import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectTechnology } from './actions'
import './styles.scss'

class Home extends Component{
	createListItems(){
  	return this.props.technologies.map((technology) => {
  		return (<div key={technology.id} onClick={() => this.props.selectTechnology(technology)}>{technology.name}</div>)
  	})
  }

	render(){
		return (
			<section className="home-container">
					<section className="section-1">
						<div className="container">
							<div className="top-left-i-will-refactor-this">
								<h2>I am</h2>
								<p>a tech junky who loves to learn new technologies and software. I started by learning Photoshop around the age of 13 which transitioned me into designing websites, and eventually got me into web development.</p>
								<p>Professionally I’m all about Angular, React, Cordova, C#, and PHP.</p>
								<p>I have years of experience with both the LAMP and Microsoft Stacks. I'm comfortable doing dev-ops, front-end, and back-end in both environments.</p>
							</div>
							<div className="top-right-for-now">
								<h2>I like</h2>
								{this.createListItems()}
							</div>
						</div>
					</section>

					<section className="section-2">
						
					</section>
			</section>
		)
	}
}

const mapStateToProps = (state) => ({technologies: state.technologies})
export default connect(mapStateToProps, { selectTechnology })(Home)