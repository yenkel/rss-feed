import React from 'react'
import axios from 'axios'
// Style
import styles from './Style.scss'
// Components
import Pane from '../Pane'

class RssContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
      axios.get('https://api.rss2json.com/v1/api.json?rss_url=http://www.feedforall.com/sample.xml')
        .then(res => {
          console.log(res)
          // const books = res.data.items.map(obj => obj.volumeInfo)
          // this.setState({ books })
      })
  }
  render() {
    return (
      <div className={styles.root}>
        <Pane title={'Books Library'} className={styles.booksPaneContainer}>
        </Pane>
      </div>
    )
  }
}

export default RssContainer
