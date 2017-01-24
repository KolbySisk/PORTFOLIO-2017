import React, {Component} from 'react'
import { connect } from 'react-redux'
import StuffCard from '../../components/StuffCard'
import './styles.scss'

class Stuff extends Component{
  render(){
    return (
      <div className="stuff">
        {this.props.stuff.map(stuff =>
          <StuffCard
            key={stuff.id}
            stuff={stuff}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stuff: state.stuff
})

export default connect(mapStateToProps)(Stuff)
