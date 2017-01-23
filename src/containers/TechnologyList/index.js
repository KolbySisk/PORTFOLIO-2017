import React, {Component} from 'react'
import { connect } from 'react-redux'
import TechnologyCard from '../../components/TechnologyCard'
import { technologySelected } from './actions'
import './styles.scss'

class TechnologyList extends Component{
  onTechnologyClick = (technology) => {
    this.props.technologySelected(technology)
    //indow.scrollTo(0, 500)
  }

  render(){
    return (
      <div className="technology-list">
        <h2>I like</h2>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  technologies: state.technologies,
  technologyListReducer: state.technologyListReducer
})

export default connect(mapStateToProps, { technologySelected })(TechnologyList)