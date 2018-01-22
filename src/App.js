import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Components
import BookPage from './components/BookPage'

const App = React.createClass ({
    render() {
        return (
            <BookPage />
        )
    }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
