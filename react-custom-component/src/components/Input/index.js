import React, { Component } from 'react';
import classNames from 'classnames'
import Icon from "../Icon";
import "./index.scss"


class Input extends Component{
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      innerValue: ''
    }
  }
  get isControl() {
    return 'value' in this.props
  }
  get value() {
    if (this.isControl) {
      return this.props.value
    } else {
      return this.state.innerValue
    }
  }

  render() {
    const {
      focus
    } = this.state
    const {
      size,
      prefix,
      suffix,
      rule = new RegExp(),
      message
    } = this.props
    let cls = classNames({
      input: true,
      focus: focus,
      [`size-${size}`]: true,
      'react-ui__input': true
    })

    return (
      <div>
        <div className={cls}>
          {prefix && <Icon name={prefix}/>}
          <input
            value={this.value}
            onFocus={e => {
              this.setState({ focus: true})
            }}
            onBlur={e => {
              this.setState({focus: false})
            }}
            onChange={(e) => {
              if (!this.isControl) {
                this.setState({
                  innerValue: e.target.value
                })
              }
              this.props.onChange(e)
            }}
          />
          {suffix && <Icon name={suffix}/>}
        </div>
        <p>
          {!rule.test(this.value) && message}
        </p>
      </div>

    )
  }

  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }

}


export default Input
