import React from 'react'
import styles from './Style.scss'
import cx from 'classnames'
import Button from '../Button'

class EditModal extends React.Component {
  constructor() {
    super()
    this.state = {
       title: '',
       authors: '',
       publishedDate: ''
    }
  }
  _getInput(book) {
     return (
       <div className={styles.editContainer}>
         <div className={styles.section}>
           <span>{'Title'}</span>
           <input className={styles.input} placeholder={book.title} onChange={(e) => this.setState({title: e.target.value})} />
         </div>
         <div className={styles.section}>
           <span>{'Author'}</span>
           <input className={styles.input} placeholder={book.authors[0]} onChange={(e) => this.setState({authors: e.target.value})} />
         </div>
         <div className={styles.section}>
           <span>{'Date'}</span>
           <input className={styles.input} placeholder={book.publishedDate} onChange={(e) => this.setState({publishedDate: e.target.value})} />
         </div>
       </div>
     )
  }
  _getCloseButton() {
    return (
      <Button
        className={styles.closeButton}
        onClick={this.props.closePopup}
        styleName='alert'>
          {'Cancel'}
        </Button>
    )
  }
  _getSubmitButton(index) {
    return (
      <Button
        className={styles.submitButton}
        onClick={() => this.props.onSubmit(this.state, index)}
        styleName='valid'>
          {'Submit'}
        </Button>
    )
  }
  render() {
    const { book, index } = this.props
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          {this._getInput(book)}
          {this._getCloseButton()}
          {this._getSubmitButton(index)}
        </div>
      </div>
    )
  }
}

export default EditModal
