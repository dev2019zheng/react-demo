import React, {Component} from 'react';
import './App.css';


// 反向继承, 实现交互的封装
const loading = (Com) => {
  class loadingComponent extends Com {

    render() {
      return(
        <div>
          {super.render()}
          loading
        </div>
      )
    }
    showLoading() {
      console.log(1)
    }
    hideLoading() {
      console.log(2)
    }
  }
  return loadingComponent
}


// @loading
class User extends Component {
  render() {
    return (
      <div>user</div>
    )
  }

  componentDidMount() {
    this.showLoading()

    // ...

    this.hideLoading()
  }
}

User = loading(User)

class App extends Component{

  render() {
    return (
      <User />
    );
  }
}

export default App;
