import React, { Component } from 'react';


class Chat extends Component {

    constructor(props, context) {
        super(props, context)
        this.username = this.username.bind(this)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: "",
            messages: [],
            username: ""
        }
    }

    //When the system loads
    componentDidMount() {

        // Connect to Firebase and listen to changes to update the database
        firebase.database().ref('messages/').on('value', (snapshot) => {

            const currentMessages = snapshot.val()

            if (currentMessages != null) {
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    username(event) {
        this.setState({
            username: event.target.value
        })
    }


    //Update message authomatically
    updateMessage(event) {
        // console.log('updateMessage: ' + event.target.value)
        this.setState({
            message: event.target.value
        })
    }

    //Connected to the submit button 
    submitMessage(event) {

        console.log('submitMessage: ' + this.state.message)

        //Declare the message that will be posted
        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message,
            username: this.state.username
        }

        //Connect to firebase and set the message id in the database
        // firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)


        var list = Object.assign([], this.state.messages)
        list.push(nextMessage)
        this.setState({
            messages: list
        })


    }

    render() {

        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key={message.id}><span style={{color: "red"}}>{message.username}</span>-{message.text}</li>
            )
        })
        if (this.props.firebaseUser) {
            return (


                <div>
               <div>
                  <h3>Enter your username: </h3>
                  <input placeholder="Username" onChange={this.username} />
               </div> 
                <ol>
                  {currentMessage}
                </ol>
                <input onChange={this.updateMessage} type="text" placeholder="Message" />
                <br/>
                <button onClick={this.submitMessage}>Submit message</button>
            </div>
            );
        } else {
            return (
                <h1>Welcome</h1>

            );
        }
    }
}

export default Chat;
