import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "./index.scss"


class ColumnsItem extends Component{
  render() {
    const {
      item,
      colIndex
    } = this.props
    return (
      <td>
        {item.render? item.render(item.title, item, colIndex) : item.title}
      </td>
    );
  }
}

class Columns extends Component {
  render() {
    const {
      columns
    } = this.props
    return (
      <thead>
      <tr>
        {columns.map((item, i) => <ColumnsItem item={item} key={i} colIndex={i}/>)}
      </tr>
      </thead>
    )
  }
}

class DataSourceItem extends Component{
  render() {
    const {
      row,
      columns,
      rowIndex
    } = this.props

    const tds = columns.map((cell, i) => <td key={i}>{cell.render? cell.render(row[cell.dataIndex], row, rowIndex, i): row[cell.dataIndex]}</td>)

    return (
      <tr>
        {tds}
      </tr>
    )
  }
}

class DataSource extends Component{
  render() {
    const {
      dataSource,
      columns
    } = this.props

    let trs = dataSource.map((row,i) => <DataSourceItem rowIndex={i} key={i} row={row} columns={columns}/>)

    return (
      <tbody>
      {trs}
      </tbody>
    )
  }
}

class Table extends Component{
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      innerValue: ''
    }
  }

  static propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array
  }

  static defaultProps = {
    columns: [],
    dataSource: []
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
    } = this.state
    const {
      columns,
      dataSource,
      ...rest
    } = this.props

    return (
      <div {...rest}>
        <table border="1">
          <Columns columns={columns} />
          <DataSource dataSource={dataSource} columns={columns} />
        </table>
      </div>

    )
  }

  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }

}


export default Table
