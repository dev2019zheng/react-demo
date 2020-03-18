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
      name: 'provider-user'
    }
  }
  render() {
    return this.props.children
  }
}

class BaseUser extends React.Component{

  static contextTypes = {
    name: PropTypes.string
  }
  render() {
    return (
      <div>
        {this.context.name}
      </div>
    )
  }
}
class BasePost extends Component{
  static contextTypes = {
    age: PropTypes.number
  }
  render() {
    return (
      <div>
        {this.context.age}
      </div>
    )
  }
}
const connect = () => {

}

const User = connect(BaseUser)
const Post = connect(BasePost)


const store = {
  name: 'xiaoM',
  age: 12
}

class App extends React.Component{

  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <BaseUser />
            <BasePost />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
