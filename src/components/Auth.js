import React, { Component } from 'react';

class Auth extends Component {

    constructor(props, context) {
        super(props, context)
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    signIn() {
        // console.log('button connected')
        firebase.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/operation-not-allowed') {
                alert('You must enable Anonymous auth in the Firebase Console.');
            } else {
                console.error(error);
            }
            // [END_EXCLUDE]
        });
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
        btnLogout.classList.add('hide');
    }

    render() {
        return (
            <div>
               <br/>
               <a id="btnLogin" href="#" onClick={this.signIn}>Login</a>
               <br/>
               <a id="btnLogout" href="#" className="hide" onClick={this.signOut}>Logout</a> 
            </div>
        );
    }
}

export default Auth;
