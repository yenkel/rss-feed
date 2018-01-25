import React from 'react'
import styles from './Style.scss'
import cx from 'classnames'
import Button from '../Button'
import moment from 'moment'

class EditModal extends React.Component {
  constructor() {
    super()
    this._getInput = this._getInput.bind(this)
    this._getCloseButton = this._getCloseButton.bind(this)
    this._getSubmitButton = this._getSubmitButton.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this.state = {
       title: '',
       authors: '',
       publishedDate: ''
    }
  }
  _dateIsValid(date) {
    return ((
      date
      && date.length > 6
      && moment(date, "YYYY-MM-DD").isValid()
    ))
  }
  _stringIsValid(str) {
    return ((
      str
      && str.length
      && str !== ''
    ))
  }
  _getInput(book) {
    const { title, authors, publishedDate } = this.state
    const validTitle = this._stringIsValid(title)
    const validAuthor = this._stringIsValid(authors)
    const validDate = this._dateIsValid(publishedDate)
     return (
       <div className={styles.editContainer}>
         <div className={styles.section}>
           <span>{'Title'}</span>
           <input className={cx(styles.input, (!validTitle && styles.invalid), (validTitle && styles.valid))}
                  placeholder={(book !== '') ? book.title : 'Enter title'}
                  onChange={(e) => this.setState({title: e.target.value})}
            />
         </div>
         <div className={styles.section}>
           <span>{'Author'}</span>
           <input className={cx(styles.input, (!validAuthor && styles.invalid), (validAuthor && styles.valid))}
                  placeholder={(book !== '') ? book.authors[0] : 'Enter author'}
                  onChange={(e) => this.setState({authors: e.target.value})}
           />
         </div>
         <div className={styles.section}>
           <span>{'Date'}</span>
           <input className={cx(styles.input, (!validDate && styles.invalid), (validTitle && styles.valid))}
                  placeholder={(book !== '') ? book.publishedDate : 'YYYY-MM-DD'}
                  onChange={(e) => this.setState({publishedDate: e.target.value})}
           />
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
  _onSubmit(newState, index) {
    this.props.onSubmit(newState, index)
    this.props.closePopup()
  }
  _getSubmitButton(index) {
    const { title, authors, publishedDate } = this.state
    const validTitle = this._stringIsValid(title)
    const validAuthor = this._stringIsValid(authors)
    const validDate = this._dateIsValid(publishedDate)
    const validForm = validTitle && validAuthor && validDate
    return (
        <div>
          {!validForm ?
            <span className={styles.invalidForm}>
              {'Form is not valid'}
            </span>
            : null
          }
          <Button
            className={cx(styles.submitButton, (!validForm && styles.invalidButton))}
            onClick={() => this._onSubmit(this.state, index)}
            styleName='valid'>
              {'Submit'}
            </Button>
        </div>
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
