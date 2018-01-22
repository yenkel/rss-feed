import React from 'react'
// Style
import styles from './Style.scss'
import cx from "classnames"
// Components
import Pane from '../Pane'

const BookPage = React.createClass({
  render() {
    return (
      <div>
        <Pane title={'Books Library'}/>
      </div>
    )
  }

})

export default BookPage
