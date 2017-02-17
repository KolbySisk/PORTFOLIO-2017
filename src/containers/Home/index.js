import React, {Component} from 'react'
import { connect } from 'react-redux'
import TechnologyList from '../TechnologyList'
import Intro from '../../components/Intro'
import ImageAndForm from '../../components/ImageAndForm'
import Stuff from '../Stuff'
import StickyTitle from '../../components/StickyTitle'
import ContactForm from '../../containers/ContactForm'
import Stats from '../../containers/Stats'
import './styles.scss'

class Home extends Component {
	render(){
		const { technologies } = this.props
		return(
			<div className="home-container">
				<section className="home__section-1">
					<div className="container flex">
						<Intro>
							<h2>I am</h2>
							<p>a tech junky who loves to learn new technologies and software. I started by learning Photoshop around the age of 13 which transitioned me into designing websites, and eventually got me into web development.</p>
							<p>Professionally I&#39;m all about Angular, React, Cordova, C#, and PHP.</p>
							<p>I have years of experience with both the LAMP and Microsoft Stacks. I&#39;m comfortable doing dev-ops, front-end, and back-end in both environments.</p>
							<button>resume</button>
						</Intro>
						<TechnologyList technologies={technologies} />
					</div>
				</section>
				<section className="home__section-2">
					<div className="stuff-container">
						<div className="container">
				      <StickyTitle title="Stuff"/>
							<Stuff />
						</div>
					</div>
					<div className="stats-container">
						{ /*<div className="container">
							<StickyTitle title="Stats"/>
						</div>
						*/}
						<Stats />
					</div>
					<div className="contact-me-container">
						<div className="container">
							<StickyTitle title="Contact Me"/>
							<ImageAndForm src="/images/me__33.jpg" alt="sexy guy smiling">
								<ContactForm />
							</ImageAndForm>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  homeReducer: state.homeReducer
})

export default connect(mapStateToProps)(Home)