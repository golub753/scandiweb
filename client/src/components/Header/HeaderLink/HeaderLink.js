import { Component } from "react";
import { Li, Path } from "../HeaderComponents/HeaderComponents";

class HeaderLink extends Component {
    constructor(props) {
        super(props)
        this.text = this.props.text;
        this.link = this.props.link;
    }
    render() {
        return(
            <Li>
                <Path to={this.link}>{this.text}</Path>
            </Li>
        )
    }
}

export default HeaderLink;