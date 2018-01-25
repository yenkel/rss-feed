import React from 'react'
import axios from 'axios'
// Style
import styles from './Style.scss'
// Components
import Pane from '../Pane'
import BookContainer from '../BookContainer'

class BookPage extends React.Component {
  constructor(props) {
    super(props)
    this._onSubmit = this._onSubmit.bind(this)
    this._onDelete = this._onDelete.bind(this)
    this.state = {
       books: []
    }
  }
  componentDidMount() {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=genre=fiction`)
        .then(res => {
          const books = res.data.items.map(obj => obj.volumeInfo)
          this.setState({ books })
      })
  }
  _isInArray(name, val, arr) {
    return ((
      arr
      && arr.length
      && arr.map(r=>r[name]).indexOf(val) === -1
    ))
  }
  _onSubmit(values, index) {
    const { books } = this.state
    RegExp.escape = (s) => {
      return s.replace(/[^a-z ]/gi, '')
    }
    const toCapitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
    if (this._isInArray("title", values.title, books)) {
      window.alert("This book title already exists")
      return
    }
    let newBooks;
    if (index === books.length) {
      newBooks = books
      values.title = toCapitalize(RegExp.escape(values.title).toLowerCase())
      values.authors = [toCapitalize(RegExp.escape(values.authors).toLowerCase())]
      newBooks[index] = values
    } else {
      newBooks = books.map((elem, i) => {
         if (i === index) {
           elem.title = toCapitalize(RegExp.escape(values.title).toLowerCase())
           elem.authors[0] = toCapitalize(RegExp.escape(values.authors).toLowerCase())
           elem.publishedDate = values.publishedDate
         }
         return elem
       })
    }
    this.setState({
      books: newBooks
    })
  }
  _onDelete(index) {
    const newBooks = this.state.books
    newBooks.splice(index, 1)
    this.setState({
      books: newBooks
    })
  }
  render() {
    return (
      <div className={styles.root}>
        <Pane title={'Books Library'} className={styles.booksPaneContainer}>
          <div className={styles.booksContainer}>
            <BookContainer books={this.state.books}
               onSubmit={this._onSubmit}
               onDelete={this._onDelete}
             />
          </div>
        </Pane>
      </div>
    )
  }
}

export default BookPage
