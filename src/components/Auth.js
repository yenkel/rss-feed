import React, { Component } from 'react';

class Auth extends Component {

    constructor(props, context) {
        super(props, context)
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    signIn() {
        // console.log('button connected')
        firebase.auth().signInAnonymously();
        firebase.auth().onAuthStateChanged(firebaseUser => {
            console.log(firebaseUser)
        })
        if (firebase) {
            btnLogout.classList.remove('hide');
        } else {
            btnLogout.classList.add('hide');
        }
    }

    signOut() {
        // console.log('button connected')
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
               <h1>Anonymous Login </h1>
               <a id="btnLogin" href="#" onClick={this.signIn}>Login</a>
               <br/>
               <a id="btnLogout" href="#" className="hide" onClick={this.signOut}>Logout</a> 
            </div>
        );
    }
}

export default Auth;
