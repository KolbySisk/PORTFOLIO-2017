import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StuffCard from '../../components/StuffCard'
import { loadStuff } from './actions'
import './styles.scss'

class Stuff extends Component{
  filterStuff(stuff){
    if(this.props.selectedTechnologyId === null) return stuff

    let dictionary = {
      1: 'angular',
      2: 'react',
      3: 'cordovoa',
      4: 'c#',
      5: 'php'
    }

    let selectedTechnology = dictionary[this.props.selectedTechnologyId]
    return stuff.filter(stuff => stuff.categories.includes(selectedTechnology))
  }
  render(){
    const filteredStuff = this.filterStuff(this.props.stuff)
    return(
      <div className="stuff">
        { filteredStuff.map(stuff => <StuffCard key={stuff.id} stuff={stuff} /> )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stuff: state.stuffReducer.stuff,
  selectedTechnologyId: state.stuffReducer.selectedTechnologyId
})

export default connect(mapStateToProps,
  dispatch => bindActionCreators(loadStuff, dispatch)
)(Stuff)