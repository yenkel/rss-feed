import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
import Auth from './components/Auth';
import Clock from './components/Clock';
import Header from './components/Header';


class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.saveFirebaseUser = this.saveFirebaseUser.bind(this)
        this.username = this.username.bind(this)
        this.state = {
            firebaseUser: "",
            username: ""
        }
    }

    saveFirebaseUser(firebaseUser) {
        this.setState({
            firebaseUser: firebaseUser
        })
    }

    username(event) {
        this.setState({
            username: event.target.value
        })
    }




    render() {
        return (
            <div>
              <Header />
              <br/>
              <Auth saveFirebaseUser={this.saveFirebaseUser} username={this.username}/>
              <Chat firebaseUser={this.state.firebaseUser}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
