import React, {Component} from 'react';

export default class MousePosition extends Component {
  constructor(props){
    super(props)
    this.state = {
      positionX: '0',
      positionY: '0'
    };
  }

  componentDidMount(){
    this.updateMousePosition()
    window.addEventListener('mouseover', this.updateMousePosition)
  }

  updateMousePosition = (e) => {
    if (!e) return
    this.setState({
      positionX:e.screenX,
      positionY:e.screenY
    })
    console.log(e)
  }

  render(){
    const {positionX, positionY} = this.state
    return(
      <div>
        positionX:{positionX}
        positionY:{positionY}
      </div>
    )
  }


}
