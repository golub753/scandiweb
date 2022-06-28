import React, { Component } from 'react';
import { PathImg, Icon } from '../HeaderComponents/HeaderComponents';

class HeaderBug extends Component {
    render() { 
        return (
            <PathImg to="/cart">
                <Icon src='./images/icons/bug.svg' alt='bug'/>
            </PathImg>
        );
    }
}
 
export default HeaderBug;