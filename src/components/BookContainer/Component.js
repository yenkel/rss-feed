import React from 'react'
import Separator from '../Separator'
// Style
import styles from './Style.scss'
import cx from "classnames"

class BookContainer extends React.Component {

  _getBooksContent(books) {
    if (books && books.length) {
      console.log("BOOKS", books)
    }
    return (
       <div>
         <div className={styles.valuationsHeader}>
           <span>{this.props.genre}</span>{" Books"}
           <Separator />
           <div className={styles.valuationsNumberContainer}>
             {books.length}{" books"}
           </div>
         </div>
         <div className={styles.interestsContainer}>
           {"booksList"}
         </div>
       </div>
    )
  }

  render() {
    const { books } = this.props
    return (
      <div>
        {this._getBooksContent(books)}
      </div>
    )
  }
}

export default BookContainer
