import React from 'react';
import './App.css';
import Input from './components/Input'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 'control'
    }
  }
  value = 'default';

  render() {
    window.rt = this;
    const {
      value
    } = this.state
    return (
      <div className="App">
        <span>受控组件: </span><Input value={value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}
        />
        <br/>
        <span>非受控组件: </span><Input defaultValue={this.value} onChange={(e) => {
          this.value = e.target.value
          }}
        />
      </div>
    );
  }
}

export default App;
