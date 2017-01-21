import React, { Component } from 'react'
import './styles.scss'

export default class Header extends Component{
	render(){
		return (
			<header className="site-header">
				<div className="site-banner">
          <img src={'/images/logo.png'} alt="my logo - kolby sisk :)#" className="logo"/>
          <img src={'/images/home-banner.jpg'} alt="sweet banner" className="site-banner-image"/>
        </div>
			</header>
		)
	}
}