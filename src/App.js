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
              <header>
                 <h1>Welcome to my Chat!</h1><Clock />
              </header>
              <br/>
              <div className="chat-container">
                 <div className="chat-container-header"><Chat firebaseUser={this.state.firebaseUser}/></div>
                  <Auth saveFirebaseUser={this.saveFirebaseUser}/>
                  
              </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
