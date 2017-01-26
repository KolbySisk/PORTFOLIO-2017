import React from 'react'
import TechnologyList from '../TechnologyList'
import Intro from '../../components/Intro'
import ImageAndBox from '../../components/ImageAndBox'
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
					<p><a href="https://www.resume.com/" target="_blank">resume</a></p>
				</Intro>
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
			<ImageAndBox src="/images/me.jpg">
				<h2><span className="top">Check out my</span> blog</h2>
			</ImageAndBox>
		</section>
	</section>
)

export default Home