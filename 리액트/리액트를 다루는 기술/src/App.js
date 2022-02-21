import React ,{ Component } from 'react';
import './App.css';
import Info from "./component/Info"
import LifeCylceSample from "./component/LifeCylceSample"
import UseCallbackSample from "./component/UseCallbackSample"
import UseMemoSample from "./component/UseMemoSample"

function getRandomColor() {
  return "#" + Math.floor(Math.random() + 16777215).toString(16)
}

export class App extends Component {
  state = {
    color: "#000",
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCylceSample color={this.state.color} />
        <UseMemoSample />
        <UseCallbackSample />
        <Info />
      </div>
    )
  }
}

export default App;
