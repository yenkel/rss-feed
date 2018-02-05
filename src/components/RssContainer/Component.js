import React from 'react'
import axios from 'axios'
// Style
import styles from './Style.scss'
// Components
import Pane from '../Pane'
import FeedsDisplay from '../FeedsDisplay'
import UrlHistory from '../UrlHistory'

class RssContainer extends React.Component {
  constructor(props) {
    super(props)
    this.lookForFeeds = this.lookForFeeds.bind(this)
    this.changeUrl = this.changeUrl.bind(this)
    this.submitUrl = this.submitUrl.bind(this)
    this.deleteUrl = this.deleteUrl.bind(this)
    this.state = {
      feeds: JSON.parse(localStorage.getItem('feeds')) || [],
      newInput: '',
      url: JSON.parse(localStorage.getItem('url')) || [],
      selectedUrl: JSON.parse(localStorage.getItem('selectedUrl')) || ''
    }
  }
  componentDidMount() {
      this.lookForFeeds()
  }
  lookForFeeds() {
    const { selectedUrl } = this.state
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=' + selectedUrl)
      .then(res => {
        if (res && res.data && res.data.items) {
          const feeds = res.data.items.map(obj => obj)
          this.setState({ feeds }, () => {
            localStorage.setItem('feeds', JSON.stringify(this.state.feeds))
            localStorage.setItem('selectedUrl', JSON.stringify(this.state.selectedUrl))
            localStorage.setItem('url', JSON.stringify(this.state.url))
          })
        } else {
          this.setState({ feeds: [] })
        }
    })
  }
  changeUrl(e) {
    const newState = this.state
    newState.newInput = e.target.value
    this.setState(newState)
  }
  submitUrl(newUrl) {
    const newState = this.state
    if (!newState.url.includes(newUrl)) newState.url.unshift(newUrl)
    newState.selectedUrl = newUrl
    newState.newInput = ''
    this.setState(newState)
    this.lookForFeeds()
  }
  deleteUrl(index, urlToDelete) {
    const newState = this.state
    newState.url.splice(index, 1)
    if (newState.selectedUrl === urlToDelete) newState.selectedUrl = ''
    this.setState(newState)
    this.lookForFeeds()
  }
  render() {
    const { feeds, url, newInput, selectedUrl } = this.state
    return (
      <div className={styles.root}>
        <Pane title={"URL Selector"} className={styles.sidebarContainer}
          classNameContainer={styles.paneContainer}>
          <div className={styles.urlContainer}>
            <div className={styles.header}>
              <div className={styles.inputContainer}>
                <input className={styles.input}
                       placeholder='Input URL'
                       value={newInput}
                       onChange={this.changeUrl}>
               </input>
              </div>
              <div className={styles.imageContainer}>
                <img src={"https://png.icons8.com/color/540/search.png"}
                     onClick={() => this.submitUrl(newInput)}/>
              </div>
            </div>
            <UrlHistory urlHistory={url}
                        onChange={this.submitUrl}
                        selected={selectedUrl}
                        onDelete={this.deleteUrl}/>
          </div>
        </Pane>
        <Pane title={"Feeds Display"} className={styles.mainScreenContainer}
          classNameContainer={styles.paneContainer}>
          <div className={styles.feedsContainer}>
             <FeedsDisplay url={url[0]} feeds={feeds} />
          </div>
        </Pane>
      </div>
    )
  }
}

export default RssContainer
