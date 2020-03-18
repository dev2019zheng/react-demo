import React from 'react';
import './App.css';


class LoadingComponent extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  showLoading() {
    this.setState({
      loading: true
    })
  }
  hideLoading() {
    this.setState({
      loading: false
    })
  }

  render() {
    const {
      loading
    } = this.state
    return (
      <div>
        { loading? 'loading ...': ''}
      </div>
    );
  }
}

class App extends LoadingComponent{

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render(){
    return (
      <div className="App">
        {super.render()}
        <div>app</div>
      </div>
    )
  }

  componentDidMount() {
    this.showLoading()
    setTimeout( () => {
      this.setState({
        data: ['a', 'b', 'c'],
      });
      this.hideLoading()
    }, 2000);
  }
}

export default App;
