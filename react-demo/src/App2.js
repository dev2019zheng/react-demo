import React from 'react';

class Child extends React.Component{
    render() {
        console.log('child render')
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('child update')
    }
}

class Parent extends React.Component{
    state = {
        name: 'aaa'
    }
    render() {
        console.log('parent render')
        return (
            <div>
                <Child name={this.state.name}/>
                <button onClick={e => {
                    this.setState({name:'bbb'})
                }}>change</button>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('parent update')
    }
}

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Parent/>
      </div>
    )
  }
}

export default App;
