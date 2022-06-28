import { Component } from "react";
import { Actions } from "../HeaderComponents/HeaderComponents";
import HeaderBug from '../HeaderBug/HeaderBug';

class HeaderActions extends Component {
    render() {
        return (
            <Actions>
                <HeaderBug/>
            </Actions>
        )
    }
} 

export default HeaderActions;