import React from 'react'
// Style
import styles from './Style.scss'
import cx from "classnames"
import Button from '../Button'
import moment from 'moment'

const FeedsDisplay = React.createClass({
  renderFeeds(feeds) {
    if (feeds && feeds.length) {
       return (
         feeds.map((feed, index) => {
           return (
               <div key={index} className={styles.feedContainer}>
                   <div className={styles.feedTitle}>
                     {feed.title} - {moment(feed.pubDate, 'YYYY-MM-DD').format('DD/MM/YYYY')}
                   </div>
                   <div className={styles.feedContent}>
                     {feed.content.replace(/(<([^>]+)>)/ig," ")}
                   </div>
                </div>
            )
         })
       )
    } else {
      return (
        <div className={styles.url}>
          {'No Feeds to display'}
        </div>
      )
    }
  },
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.url}>{this.props.url}</div>
        {this.renderFeeds(this.props.feeds)}
      </div>
    )
  }

})

export default FeedsDisplay
