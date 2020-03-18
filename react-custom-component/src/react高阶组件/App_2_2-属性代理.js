import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'


class Provider extends React.Component{

  getChildContext() {
    return this.props.store
  }

  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return this.props.children
  }
}

class BaseUser extends React.Component{

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
class BasePost extends Component{
  render() {
    return (
      <div>
        {this.props.age}
      </div>
    )
  }
}

const connect = (Com) => {
  class ConnectComponent extends Component {
    static contextTypes = Provider.childContextTypes
    displayName = Com.displayName

    render() {
      return (
        <Com { ...this.context }/>
      )
    }
  }
  return ConnectComponent
}

const User = connect(BaseUser)
const Post = connect(BasePost)


const store = {
  name: 'xiaoM',
  age: 12
}

class App extends Component{

  render() {
    return (
      <Provider store={store}>
        <div>
          <User />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
