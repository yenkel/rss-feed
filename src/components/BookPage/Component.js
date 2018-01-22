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
  render() {
    return (
      <div className={styles.root}>
        <Pane title={'Books Library'}>
           <BookContainer books={this.state.books} />
        </Pane>
      </div>
    )
  }
}

export default BookPage
