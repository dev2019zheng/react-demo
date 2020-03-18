import React from 'react';
import './App.css';


class LogComponent extends  React.Component{
  componentWillUnmount() {
    console.log('app', 'unmount')
  }
}

class App extends LogComponent{

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    }
  }

  render(){
    return (
      <div className="App">

      </div>
    )
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        data: ['a', 'b', 'c'],
      });
    }, 2000);
  }
}

export default App;
