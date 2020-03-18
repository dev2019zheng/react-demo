import React, {Component} from 'react';
import './App.css';


// 高阶组件属性代理
// 用于预先 将业务组件进行数据的封装,便于我们方便获取数据

const connect = key => (Com) => {
  class ConnectComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        [key]: test[key]
      }
    }
    render() {
      return (
        <Com { ...this.state }/>
      )
    }
    componentDidMount() {
      let that = this
      window.test = new Proxy(test, {
        get(target, p, receiver) {
          console.log('getting', p)
          return Reflect.get(target, p, receiver)
        },
        set(target, p, value, receiver) {
          console.log('setting', p)
          that.setState({
            [p]: value
          })
          return Reflect.set(target, p, value, receiver)
        }
      })
    }
  }
  return ConnectComponent
}


// User = connect('age')(User)
// @connect('age')
class User extends Component {
  render() {
    return (
      <div>{this.props.age}</div>
    )
  }
}

User = connect('age')(User)

let test = {
  name: 'xiaoM',
  age: 12
}

class App extends Component{

  render() {
    return (
      <User />
    );
  }
}

export default App;
