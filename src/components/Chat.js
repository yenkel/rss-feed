import React, { Component } from 'react';


class Chat extends Component {

    constructor(props, context) {
        super(props, context)
        this.date = this.date.bind(this)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: "",
            messages: [],
            username: "",
            date: ""
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

    date(event) {
        this.setState({
            date: event.target.value
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
            username: this.props.username,
            date: new Date().toLocaleTimeString()
        }

        //Connect to firebase and set the message id in the database
        firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)


        // var list = Object.assign([], this.state.messages)
        // list.push(nextMessage)
        // this.setState({
        //     messages: list
        // })


    }

    render() {



        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <p key={message.id}><strong>[{message.date}]</strong> - <span style={{color: "#9c27b0"}}>{message.username}</span> : {message.text}</p>
            )
        })
        if (!this.props.firebaseUser) {
            return (
                <p></p>
            );
        } else {
            return (
                <div className="chat-container">
                    <div>
                      <h3>Welcome to the chat room <em>{this.props.username}!</em> </h3>
                      
                    </div> 
                    <ol>
                      {currentMessage}
                    </ol>
                    <input onChange={this.updateMessage} type="text" placeholder="Enter your message" />
                    <br/>
                    <button id="submit" onClick={this.submitMessage}>Submit message</button>
                </div>

            );
        }
    }
}

export default Chat;
