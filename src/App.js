import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
import Auth from './components/Auth';
import Clock from './components/Clock';

class App extends Component {
    render() {
        return (
            <div>
               <h1>Welcome to Twitch chat!!</h1>
               <Clock />
               
               <Auth />
               <Chat />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
