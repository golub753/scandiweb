import { Component } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { Ul, Nav } from "../HeaderComponents/HeaderComponents";


class HeaderLinks extends Component {
    constructor(props) {
        super(props)
        this.links = [
            {
                text: "women",
                link: "/women"
            },
            {
                text: "men",
                link: "/men"
            },
            {
                text: "kids",
                link: "/kids"
            }
        ]
    }
    render() {
        return(
            <Nav>
                <Ul>
                    {this.links.map((link, id) => {
                        return (
                            <HeaderLink
                                text={link.text}
                                link={link.link}
                                key={id}
                            />
                        )
                    })}
                </Ul>
            </Nav>
        )
    }
}

export default HeaderLinks;