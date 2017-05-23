import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
import Auth from './components/Auth';

class App extends Component {
    render() {
        return (
            <div>
               <h1>Welcome to Twitch chat!!</h1>
               <Auth />
               <Chat />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
