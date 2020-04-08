import React from 'react';
import './App.css';
import { confirm } from './components/Confirm'

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
        <h1>confirm test</h1>
        <button onClick={() => {
          confirm('测试打开弹窗').then(status => {
            alert(status? '点击了确定': '点击了取消')
          })
        }}>打开弹窗</button>
      </div>
    );
  }

  async componentDidMount(){
    let res = await confirm("确定删除吗")
    if(res) {
      console.log("是")
    } else {
      console.log("否")
    }
  }
}

export default App;
