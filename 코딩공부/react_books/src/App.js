import React ,{ Component } from 'react';
import './App.css';
import LifeCylceSample from './component/LifeCylceSample';

function getRandomColor() {
  return "#"+Math.floor(Math.random() + 16777215).toString(16)
}

export class App extends Component {
  state = {
  color:"#000"
  }
  
  handleClick = () => {
    this.setState({
      color:getRandomColor()
    })
  }

  render() {
    return(
      
      <div className="App">
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCylceSample color={this.state.color}/>
      </div>
    );
  }
}

export default App;
