import React, {Component, useEffect, useState} from 'react';

// 函数式组件
// 数据: props, state
// props 需要在函数式组件的参数传递:
//      const App = (props) => <div>hello world {props.name}</div>
// state 通过useState(初始值)生成state的一个属性的数组 [xx, setXx]:
//      let [time, setTime] = useState(0)
// 生命周期
// 使用 useEffect(函数, []// 第二个参数放状态改变是需要触发更新事件的state)函数  ==> componentDidMount + componentDidUpdate
// useEffect() return 一个函数表示componentWillUnmount触发的事件
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      age: 10
    }
  }

  render() {
    const {
      time,
      age
    } = this.state
    return (
      <div>
        <div><span>props: </span>{this.props.name}</div>
        <div>
          times: {time} <button onClick={(e) => this.setState({time: time+1})}> +1 </button>
        </div>
        <div>
          age: {age} <button onClick={(e) => this.setState({age: age-1})}> -1 </button>
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log('monted')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('update')
  }

  componentWillUnmount() {
    console.log('unmount')
  }

}



let flag = true
const App = (props) => {
  let [time, setTime] = useState(0)
  let [age, setAge] = useState(10)
  // let [a, setA] = useState('A')

  // useState必须定义在函数的最顶级,不能放在if之类里,要保证函数式组件的每次状态都是一致的
  if(flag) {
    // let [a, setA] = useState('A')
    flag = false
  }

  useEffect(() => {
    console.log('useEffect')

    // return 一个函数表示componentWillUnmount触发的事件
    return () => {
      console.log('unmount')
    }

  }, [time])  // 第二个参数放状态改变是需要触发更新事件的state


  return (
    <div>
      <div><span>props: </span>{props.name}</div>
      <div>
        times: {time} <button onClick={(e) => setTime(time+1)}> +1 </button>
      </div>
      <div>
        age: {age} <button onClick={(e) => setAge(age-1)}> -1 </button>
      </div>
    </div>
  )
}


export default App;
