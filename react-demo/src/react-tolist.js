import React from 'react';
import './App.css';


class TodoList extends React.Component{
  render() {
    const {
      data,
      onDelete
    } = this.props
    return (
      <div>
        {data.map((item, index) => (
          <ol>
            <li>
              <p>{item}</p>
              <button onClick={e => {
                onDelete(index)
              }}>删除</button>
            </li>
          </ol>
        ))}
      </div>
    );
  }
}
class Action extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const {
      onAdd
    } = this.props
    return (
      <div>
        <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}/>
        <button onClick={() => {
          onAdd(this.state.value)
          this.setState({value: ''})
        }}>add</button>
      </div>
    )
  }
}

class App extends React.Component{

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
        <div>
          TodoList:
          <Action onAdd={(name) => {
            let data = this.state.data
            data.push(name)
            this.setState(data)
          }}/>
          <TodoList
            data={this.state.data}
            onDelete={(index) => {
              let data = this.state.data
              data.splice(index, 1)
              this.setState(data)
            }}
          />
        </div>
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
