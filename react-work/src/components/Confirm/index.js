import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

/**
 * @author zhengyh
 * @date 2020/4/8 下午5:17
 * @Description:
 * 请写一个满足以下要求的confirm方法组件：
 （1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；
 （2）能通过该promise返回的结果判断confirm组件是否成功挂载。
   ```
       async componentDidMount(){
          let res = await confirm("确定删除吗")
          if(res) {
              console.log("是")
          } else {
              console.log("否")
          }
      }
   ```
 */

let that = null
// body下的div容器, 动态挂载confirm组件
const container = document.createElement('div')
document.body.appendChild(container)

class ConfirmReact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      message: '',
      onOk: () => {},
      onCancel: () => {},
      zIndex: 9999,
    }
    that = this
  }

  componentWillUnmount() {
    document.removeChild(container);
  }

  render() {
    const { show, message, onOk, onCancel, zIndex = 9999 } = this.state;
    document.body.style = show ? 'overflow: hidden' : '';
    return (
      <div
        style={{
          display: show ? null : 'none',
        }}
      >
        <div className="react--dialog--mask" style={{zIndex: zIndex - 1}}/>
        <div className="react--dialog" style={{ zIndex: zIndex }}>
          <div className="react--dialog--body">
            <div className="react--dialog--body-content">
              { message }
            </div>
            <div className="react--dialog--body-footer">
              <a href="#" className="btn btn-primary" onClick={onOk.bind(this)}>确定</a>
              <a href="#" className="btn" onClick={onCancel.bind(this)}>取消</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ConfirmReact />, container);

// 暴露confirm方法,
export function confirm(message) {
  // 返回Promise, 确认时resolve(true), 取消时resolve(false)
  return new Promise((resolve) => {
    // 点击响应方法, 先resolve,再关闭确认框
    let handleClickBtn = (status) => {
      resolve(status);
      // 还原初始化
      that.setState({
        show: false,
        message: '',
        onOk: () => {},
        onCancel: () => {},
        zIndex: 9999
      })
    };

    that.setState({
      show: true,
      message,
      onOk: () => {
        handleClickBtn(true)
      },
      onCancel: () => {
        handleClickBtn(false)
      },
      zIndex: 9999
    });
  })
}
