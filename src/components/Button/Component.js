
import React from 'react'
// Style
import styles from './Style.scss'
import cx from "classnames";

const Button = React.createClass({
  getStyleName() {
    if (this.props.styleName && styles[this.props.styleName]) {
      return styles[this.props.styleName]
    }
    return styles.secondary
  },
  render() {
    return (
      <button
        onClick={this.props.disabled ? ()=>{} : this.props.onClick}
        className={cx(
          this.getStyleName(),
          this.props.className,
          this.props.disabled && styles.disabled
        )}
        style={this.props.style}
      >
        {this.props.children}
      </button>
    )
  }

})

export default Button
