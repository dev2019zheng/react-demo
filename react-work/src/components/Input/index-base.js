import React, {
  Component
} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerValue: ''
    }
  }
  // 判断是否可控
  get isControl() {
    return 'value' in this.props;
  }
  get value() {
    if (this.isControl) {
      return this.props.value;
    } else {
      return this.state.innerValue;
    }
  }

  render() {
    return (
      <input
        value = {
          this.value
        }
        onChange = {
          (e) => {
            if (!this.isControl) {
              this.setState({
                innerValue: e.target.value
              })
            }
            this.props.onChange(e)
          }
        }
      />
    )
  }
  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }
}

export default Input;
