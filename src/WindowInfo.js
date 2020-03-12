import React, {Component} from 'react';

class WindowInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      screenWidth:'0',
      screenHeight:'0'
    };
  }

  componentDidMount(){
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions= () => {
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    })
  }

  render(){
    const {screenHeight, screenWidth} = this.state
    return (
      <>
        <p>screenHeight: {screenHeight}</p>
        <p>screenWidth: {screenWidth}</p>
      </>
    );
  }
}


export default WindowInfo;