import React, {Component} from 'react';

export default class Animation extends Component {
  state = {
    xPos: 100,
    dx: 4
  }

  componentDidMount(){
    this.ticker = setInterval( () => {
      this.nextStep()
    }, 1000);
  }

  // componentDidMount(){
  //   this.ticker = setInterval( () => {
  //   }, 40);
  // }


  componentDidUpdate(prevProps, prevState){
    if(prevState.xPos < 0){
      //if it's less than 0 then the object is outside of the box
    }
    if(prevState.xPos > 600 - boxWidth){
      //need to see if the x position is greater than the screen
      this.setState({
        dx: -4,
        xPos: 599 - boxWidth
      })
    }
  }

  nextStep(){
    const {xPos, dx} = this.state
    this.setState({
      xPos: xPos + dx
    })
  }


  render(){
    const {width, height} = this.props
    const xPos = this.state
    return(
      <>
        <div style={ { ...styles.container, width, height } }>
          <div style={ { ...styles.mover1, left: xPos } }> </div>
        </div>
        <div style={ { ...styles.container2, width, height } }> </div>
        <div style={ { ...styles.container3, width, height } }> </div>
        <div style={ { ...styles.container4, width, height } }> </div>
      </>
    )
  }
}

const boxWidth = 20
const styles = {
  mover1:{
    position:'absolute',
    top:'200px',
    height:'30px',
    width:`${boxWidth}px`,
    backgroundColor:'blue'
  },

  container:{
    border: '1px solid',
    backgroundColor: 'green',
    position:'relative',
    left:'0px',
    top:'0px',
  },
  container2:{
    border: '1px solid',
    backgroundColor: 'orange',
    position:'relative',
    left:'780px',
    bottom:'249px',
  },

  container3:{
    border: '1px solid',
    backgroundColor: 'red',
    position:'relative',
    left:'0px',
    bottom:'200px',
  },
  container4:{
    border: '1px solid',
    backgroundColor: 'teal',
    position:'relative',
    left:'780px',
    bottom:'450px',
  },
}