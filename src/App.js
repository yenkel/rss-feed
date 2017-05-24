import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
import Auth from './components/Auth';
import Clock from './components/Clock';

class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.saveFirebaseUser = this.saveFirebaseUser.bind(this)
        this.state = {
            firebaseUser: ""
        }
    }

    saveFirebaseUser(firebaseUser) {
        this.setState({
            firebaseUser: firebaseUser
        })
    }


    render() {
        return (
            <div>
               <h1>Welcome to Twitch chat!!</h1>
               <Clock />
               <Auth saveFirebaseUser={this.saveFirebaseUser}/>
               <Chat firebaseUser={this.state.firebaseUser}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
