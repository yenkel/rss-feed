import React, { Component } from 'react';

class Chat extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            messages: [
                { id: 0, text: 'first message' },
                { id: 1, text: 'second message' },
                { id: 2, text: 'third message' }
            ]
        }
    }

    render() {
        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key={message.id}>{message.text}</li>
            )
        })
        return (

            <div> 
                <ol>
                  {currentMessage}
                </ol>
                <input type="text" placeholder="Message" />
                <br/>
                <button>Submit message</button>
            </div>
        );
    }
}

export default Chat;
