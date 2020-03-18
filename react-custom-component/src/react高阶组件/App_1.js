import React from 'react';
import '../App.css';



class Provider extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: 'provider-user'
    }
  }
  render() {
    return this.props.render(this.state.name)
  }
}

class User extends React.Component{

  render() {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }
}


class App extends React.Component{

// 渲染属性, render
  render() {
    return (
      <div>
        <Provider render={(data) => <User data={data} />} />
      </div>
    );
  }
}

export default App;
