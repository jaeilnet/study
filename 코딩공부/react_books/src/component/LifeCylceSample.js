import React, { Component } from 'react';

export class LifeCylceSample extends Component {

  state = {
    number: 0,
    color : null
  }

  myRef = null

  constructor(props) {
    super(props)
    console.log('constructor', props)
  }

  static getDerviedStateFromProps(nextProps, prevState) {
    console.log("getDerviedStateFromProps")
    console.log(nextProps, prevState , "nextProps, prevState")
    if (nextProps.color !== prevState.color) {
      return { color : nextProps.color}
    }
    return null
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  shouldComponentUpdate(nextProps, nexState) {
    console.log("shouldComponentUpdate", nextProps, nexState)

    return nexState.number % 10 !== 4
    
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  handleClick = () => {
    this.setState({
      number:this.state.number + 1
    })
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log("getSnapshotBeforeUpdate", preProps, prevState)
    if (preProps.color !== this.props.color) {
      return this.myRef.style.color
    }

    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot)

    if (snapshot) {
      console.log("업데이트되기 전 색상", snapshot)
    }
  }

  render() {
    console.log("render")

    const style = {
      color : this.props.color
    }
    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
        <p> color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCylceSample;
