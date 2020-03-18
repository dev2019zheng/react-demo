import React from 'react';
import './App.css';
import Icon from './components/Icon'
import Button from './components/Button'
import Input from './components/Input'
import Table from "./components/Table"

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '???'
    }
  }

  value = 1

  render() {
    return (
      <div style={{'padding': '24px'}}>
        <Icon name='rct-icon-test1' style={{color: '#007fff', 'fontSize': '24px'}}/>
        <br/>
        <br/>
        <br/>
        <Button type='primary' icon='rct-icon-test2'>提交</Button>
        <br/>
        <br/>
        <br/>
        <Input size='small' prefix='rct-icon-test2'/>
        <Input size='middle'/>
        受控组件
        <Input
          size='large'
          prefix='rct-icon-test17'
          suffix='rct-icon-test20'
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}
        />
        非受控组件
        <Input
          rule={/^\d+$/}
          message="只允许输入数字"
          size='large'
          suffix='rct-icon-test9'
          defaultValue={this.value}
          onChange={(e) => {
           this.value = e.target.value
          }}
        />

        <Table
          columns={[
            {title: '姓名', dataIndex: 'name', key: 'name', render(text, item, rowIndex, colIndex){
              return <div><a href="#">{text + ' => ' + rowIndex }{colIndex == null? '' : ','+colIndex}</a></div>
              }},
            {title: '年龄', dataIndex: 'age', key: 'age', render(text, item, rowIndex, colIndex){
                return <div><a href="#">{text + ' => '+ rowIndex}{colIndex == null? '' : ','+colIndex}</a></div>
              }},
            {title: '邮箱', dataIndex: 'email', key: 'email', render(text, item, rowIndex, colIndex){
                return <div><a href="#">{text + ' => ' + rowIndex}{colIndex == null? '' : ','+colIndex}</a></div>
              }}
          ]}
          dataSource={[
            {name: '小三', age: 22, email: 'xxx@xxx'},
            {name: '小四', age: 24, email: 'xxx@xxx'},
            {name: '888', age: 23, email: 'xxx@xxx'},
            {name: 'xis', age: 25, email: 'xxx@xxx'},
          ]}
          />
      </div>
    );
  }
}

export default App;
