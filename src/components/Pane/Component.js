import React from 'react'
// Styles
import styles from './Style.scss'
import cx from 'classnames'

const Pane = React.createClass({
  _getHeader() {
    return (
      <div className={cx(
        styles.header,
        this.props.classNameHeader)}
        >
          {this.props.title}
          {this.props.details}
        </div>
    )
  },
  _getContent() {
    return (
      <div className={cx(
        styles.container,
        this.props.classNameContainer)}
      >
        {this.props.children}
      </div>
    )
  },
  render() {
    const { autohide } = this.props
    if (autohide && !this.props.children.length) {
      return null
    }
    return (
      <div className={cx(
        styles.root,
        this.props.className)}
      >
        {this._getHeader()}
        {this._getContent()}
      </div>
    )
  }
})

export default Pane
