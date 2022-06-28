import { Component } from "react";
import { PathImg, Img } from "../HeaderComponents/HeaderComponents";

class HeaderHome extends Component{
    render() {
        return(
            <PathImg to="/">
                <Img src="./images/icons/logo.svg" alt="logo"/>
            </PathImg>
        )
    }
}

export default HeaderHome;