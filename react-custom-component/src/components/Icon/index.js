import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../assets/iconfont/iconfont.css'

/**

 */
class Icon extends Component{

  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: ''
  };


  render() {
    const {
      name,
      ...rest
    } = this.props
    return (
      <span {...rest} className={`icon iconfont ${name}`}/>
    )
  }
}


export default Icon
