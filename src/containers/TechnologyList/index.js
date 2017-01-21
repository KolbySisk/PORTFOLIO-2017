import React, {Component} from 'react'
import { connect } from 'react-redux'
import TechnologyCard from '../../components/TechnologyCard'
import { selectTechnology } from './actions'
import './styles.scss'

class TechnologyList extends Component{
  onTechnologyClick = (technology) => {
    this.props.selectTechnology(technology)
  }

  render(){
    return (
      <div className="technology-list">
        {this.props.technologies.map(technology =>
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onClick={() => this.onTechnologyClick(technology)}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({technologies: state.technologies})
export default connect(mapStateToProps, { selectTechnology })(TechnologyList)