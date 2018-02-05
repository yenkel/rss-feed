import React from 'react'
// Style
import styles from './Style.scss'
import cx from "classnames";

const Button = React.createClass({
  renderHistory(history, selected) {
    if (history && history.length && selected) {
       return (
         history.map((url, index) => {
           const active = url === selected
             return (
               <div key={index} className={styles.container}>
                 <div className={cx(styles.historicalUrl, active && styles.active)}
                   onClick={() => this.props.onChange(newUrl)}>
                   {url}
                 </div>
                 <div className={styles.imageContainer}>
                   <img src={"https://cdn0.iconfinder.com/data/icons/classic-icons/512/058.png"}
                        onClick={() => this.props.onDelete(index, url)} />
                 </div>
               </div>
             )
         })
       )
    }
  },
  render() {
    return (
      <div className={styles.root}>
        {this.renderHistory(this.props.urlHistory, this.props.selected)}
      </div>
    )
  }

})

export default Button
