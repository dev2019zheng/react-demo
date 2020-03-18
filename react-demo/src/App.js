import React from 'react';
import './App.css';

let loading = Com => {
  class LoadingComponent extends Com {
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
          {super.render()}
        </div>
      );
    }
  }
  return LoadingComponent
};

// 装饰器 ==> loading(App)
@loading
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  render(){
    let {
      data
    } = this.state
    return (
      <div className="App">
        <div>
          {data.map(x => (<p>{x}</p>))}
        </div>
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
