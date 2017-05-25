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
              <Header />
              <br/>
              <div className="auth-container">
                 <div className="auth-container-header"><Chat firebaseUser={this.state.firebaseUser}/>
              </div>

                  <Auth saveFirebaseUser={this.saveFirebaseUser}/>
                  
              </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
