import React, {Component} from 'react'
import { connect } from 'react-redux'
import TechnologyCard from '../../components/TechnologyCard'
import { technologySelected, technologyListStucked } from './actions'
import smoothScroll from 'smooth-scroll' //https://github.com/cferdinandi/smooth-scroll
import './styles.scss'

class TechnologyList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      technologyListWidth: null,
      technologyListOriginalY: null,
      stuffTitleHeight: null,
      debounce: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    this.setState({
      technologyListWidth: this.refs.technologyList.getBoundingClientRect().width
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) =>{
    if(this.state.debounce) return

    let winScrollY = window.scrollY
    let technologyListY = this.refs.technologyList.getBoundingClientRect().top

    // if we scroll within 20 pixes of the technology list we stickify it
    // check first to make sure it isn't already stuck so we don't stickify it every scroll
    if(technologyListY < 30 && !this.props.technologyListReducer.technologyListStuck){
      this.refs.technologyList.style.width = this.state.technologyListWidth + "px"

      // doing some extra work to make sure the list height is the same as the Stuff container's height. I'll refactor this
      let headerHeight = this.refs.technologyList.querySelector("header").getBoundingClientRect().height
      let stuffTitleHeight = document.getElementsByClassName("stuff__title ")[0].getBoundingClientRect().height

      Array.prototype.slice.call(this.refs.technologyList.querySelectorAll('.technology-card__body')).map(x => x.style.height = stuffTitleHeight - headerHeight + "px")

      this.setState({ technologyListOriginalY: winScrollY + technologyListY })
      this.props.technologyListStucked(true)

      this.setState({ debounce: true })
      setTimeout(() => { this.setState({ debounce: false }) }, 100)
    }

    //unstick it if we scroll past the original y of the list
    else if(winScrollY+20 < this.state.technologyListOriginalY && this.props.technologyListReducer.technologyListStuck){
      this.props.technologyListStucked(false)

      Array.prototype.slice.call(this.refs.technologyList.querySelectorAll('.technology-card__body')).map(x => x.style.height = 175 + "px")

      this.setState({ debounce: true })
      setTimeout(() => { this.setState({ debounce: false }) }, 100)
    }
  }

  onTechnologyClick = (technology) => {
    this.props.technologySelected(technology.id)

    var anchor = document.querySelector('.home__section-2');
    var options = { speed: 500 };
    smoothScroll.animateScroll( anchor, null, options );
  }

  render(){
    return (
      <div className="technology-list">
        <h2>I like</h2>
        <div className={"technology-list__list " + (this.props.technologyListReducer.technologyListStuck ? 'stuck' : '')} ref="technologyList">
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

export default connect(mapStateToProps, {
  technologySelected,
  technologyListStucked 
})(TechnologyList)