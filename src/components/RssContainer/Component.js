import React from 'react'
import axios from 'axios'
// Style
import styles from './Style.scss'
// Components
import Pane from '../Pane'
import FeedsDisplay from '../FeedsDisplay'

class RssContainer extends React.Component {
  constructor(props) {
    super(props)
    this.lookForFeeds = this.lookForFeeds.bind(this)
    this.changeUrl = this.changeUrl.bind(this)
    this.state = {
      feeds: [],
      inputUrl: '',
      url: 'http://www.feedforall.com/sample.xml'
    }
  }
  componentDidMount() {
      this.lookForFeeds()
  }
  lookForFeeds() {
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=' + this.state.url)
      .then(res => {
        const feeds = res.data.items.map(obj => obj)
        this.setState({ feeds })
    })
  }
  changeUrl(e) {
    const newState = this.state
    newState.inputUrl = e.target.value
    this.setState({ newState })
  }
  render() {
    const { feeds, url } = this.state
    console.log(feeds)
    return (
      <div className={styles.root}>
        <Pane title={"URL Selector"} className={styles.sidebarContainer}
          classNameContainer={styles.paneContainer}>
          <div className={styles.urlContainer}>
            <div className={styles.header}>
              <div className={styles.inputContainer}>
                <input className={styles.input}
                       placeholder='Input URL'
                       value={url}
                       onChange={this.changeUrl}>
               </input>
              </div>
              <div className={styles.imageContainer}>
                <img src={"https://png.icons8.com/color/540/search.png"}
                    onClick={() => this.setState({ url: inputUrl})}/>
              </div>
            </div>
          </div>
        </Pane>
        <Pane title={"Feeds Display"} className={styles.mainScreenContainer}
          classNameContainer={styles.paneContainer}>
          <div className={styles.feedsContainer}>
             <FeedsDisplay url={url} feeds={feeds}/>
          </div>
        </Pane>
      </div>
    )
  }
}

export default RssContainer
