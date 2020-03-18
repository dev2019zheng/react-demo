import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Loading extends React.Component{

  render() {
    return (
      <div className='laoding'>
        loading
      </div>
    )
  }
}

let node = null;
const loading = {
  show: () => {
    node = document.createElement('div');
    document.body.appendChild(node);
    ReactDOM.render(<Loading/>, node);
  },
  hide: () => {
    if (node) {
      ReactDOM.unmountComponentAtNode(node);
      document.body.removeChild(node);
      node = null;
    }
  }
};

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
          list:
          { this.state.data.map(item => <p>{item}</p>)}
          { this.state.loading && <Loading/> }
        </div>
      </div>
    )
  }

  componentDidMount() {
    // laoding show
    // this.setState({
    //   loading: true
    // });
    loading.show();
    setTimeout( () => {
      this.setState({
        data: ['a', 'b', 'c'],
        // loading: false
      });
      loading.hide()
    }, 2000);
  }
}

export default App;
