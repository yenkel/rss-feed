import React from 'react'
import Separator from '../Separator'
import Button from '../Button'
import EditModal from '../EditModal'
// Style
import styles from './Style.scss'
import cx from "classnames"

class BookContainer extends React.Component {
  constructor() {
    super()
    this._getBooksContent = this._getBooksContent.bind(this)
    this._toggleModal = this._toggleModal.bind(this)
    this._getBooksDescription = this._getBooksDescription.bind(this)
    this._editBook = this._editBook.bind(this)
    this.state = {
      showModal: false
    }
  }
  _toggleModal(index) {
    this.setState({
      showModal: index
    })
  }
  _getBooksContent(books) {
    return (
       <div>
         <div className={styles.booksHeader}>
           <span>{this.props.genre}</span>{" Books"}
           <Separator />
         </div>
         <div className={styles.libraryContainer}>
           {this._getBooksDescription(books)}
         </div>
       </div>
    )
  }

  _getBooksDescription(books) {
    if (books && books.length) {
      const booksList = books.map((book, index) => {
        return (
            <div key={index} className={styles.bookContainer}>
                <div className={styles.bookTitle}>
                  {book.title}
                </div>
                <div className={styles.bookAuthor}>
                   {"Author: "}{book.authors[0]}
                   <span className={styles.bookDate}>
                     {book.publishedDate || 'No Date'}
                   </span>
                </div>
                <div className={styles.buttonContainer}>
                  <Button styleName='valid' onClick={() => this._toggleModal(index)}>
                     {"Edit"}
                  </Button>
                </div>
             </div>
         )
      })
      return (
        <div>
          {booksList}
          {this._displayModal()}
        </div>
      )
    }
  }

  _displayModal() {
    const { books } = this.props
       if (this.state.showModal !== false) {
         return (
           <EditModal
             closePopup={() => this.setState({showModal: false})}
             book={books[this.state.showModal]}
             index={this.state.showModal}
             onSubmit={this.props.onSubmit}
           />
         )
       }
  }

  _onChange(name, value) {
    console.log(name, value)
  }

  _editBook(book) {
    // console.log(book)
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
