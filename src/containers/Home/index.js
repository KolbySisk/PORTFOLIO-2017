import React from 'react'
import TechnologyList from '../TechnologyList'
import Intro from '../../components/Intro'
import ImageAndBox from '../../components/ImageAndBox'
import ImageAndForm from '../../components/ImageAndForm'
import Stuff from '../Stuff'
import StickyTitle from '../../components/StickyTitle'
import './styles.scss'

const Home = ({technologies}) => (
  <section className="home-container">
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
			<div className="contact-me-container">
				<div className="container">
					<StickyTitle title="Contact Me"/>
				
					<ImageAndForm src="/images/me__33.jpg" alt="sexy guy smiling">
						<section className="contact-form">
							<header>
								<h3>Email me</h3>
								<h4>Feel free to say hi</h4>
							</header>
							<form>
								<input type="text" placeholder="Your name" required />
								<input type="text" placeholder="Your email address" required />
								<input type="text" placeholder="Your phone number" required />
								<textarea placeholder="Your message"></textarea>
								<button>Send</button>
							</form>

						</section>
					</ImageAndForm>

				</div>
			</div>
		</section>
	</section>
)

export default Home


// <ImageAndBox src="/images/me.jpg" alt="sexy guy smiling">
// 	<h2><span className="top">Check out my</span> blog</h2>
// </ImageAndBox>