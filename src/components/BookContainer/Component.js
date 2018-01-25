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
    this._deleteBook = this._deleteBook.bind(this)
    this.state = {
      showModal: false
    }
  }
  _toggleModal(index) {
    this.setState({
      showModal: index
    })
  }
  _deleteBook(books, index) {
    window.alert(books[index].title + ' has been deleted')
    this.props.onDelete(index)
  }
  _getBooksContent(books) {
    return (
       <div>
         <div className={styles.booksHeader}>
           <Button styleName='primary'
              onClick={() => this._toggleModal(books.length)}
              className={styles.newBookButton}>
              {"Add New Book"}
           </Button>
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
                  <Button styleName='alert' onClick={() => this._deleteBook(books, index)}>
                     {"Delete"}
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
    const { books, onSubmit } = this.props
    if (this.state.showModal !== false) {
      return (
        <EditModal
          closePopup={() => this.setState({showModal: false})}
          book={books[this.state.showModal] || ''}
          index={this.state.showModal}
          onSubmit={onSubmit}
        />
      )
    }
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
