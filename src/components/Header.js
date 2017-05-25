import React, { Component } from 'react';
import Clock from './Clock';

class Header extends Component {
    render() {
        return (
            <header>
                 <h1>Welcome to my Chat!</h1><Clock />
              </header>

        );
    }
}

export default Header;
