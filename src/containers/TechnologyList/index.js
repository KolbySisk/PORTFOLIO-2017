import React, {Component} from 'react'
import { connect } from 'react-redux'
import TechnologyCard from '../../components/TechnologyCard'
import StickyIcky from '../StickyIcky'
import { technologySelected,  } from './actions'
import Scroll from 'react-scroll'
import './styles.scss'

class TechnologyList extends Component{  
  onTechnologyClick = (technology) => {
    this.props.technologySelected(technology.id)

    Scroll.animateScroll.scrollTo(document.querySelector('.stuff').getBoundingClientRect().height-150, {
      duration: 1500,
      delay: 100,
      smooth: true,
      isDynamic: true
    })
  }

  render(){
    return (
      <div className="technology-list">
        <h2>I like</h2>
        <StickyIcky>
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