import React, {Component} from 'react'
import { connect } from 'react-redux'
import TechnologyCard from '../../components/TechnologyCard'
import StickyIcky from '../StickyIcky'
import { technologySelected,  } from './actions'
import smoothScroll from 'smooth-scroll' //https://github.com/cferdinandi/smooth-scroll
import './styles.scss'

class TechnologyList extends Component{  
  onTechnologyClick = (technology) => {
    this.props.technologySelected(technology.id)
    let anchor = document.querySelector('.stuff__title');
    let options = { speed: 800 };
    smoothScroll.animateScroll( anchor, null, options );
  }

  render(){
    return (
      <div className="technology-list">
        <h2>I like</h2>
        <StickyIcky id="1">
          <div className="technology-list__list">
            {this.props.technologies.map(technology =>
              <TechnologyCard
                key={technology.id}
                active={this.props.technologyListReducer.selectedTechnology === technology.id}
                technology={technology}
                onClick={() => this.onTechnologyClick(technology)}
              />
            )}
          </div>
        </StickyIcky>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  technologies: state.technologies,
  technologyListReducer: state.technologyListReducer
})

export default connect(mapStateToProps, {
  technologySelected
})(TechnologyList)