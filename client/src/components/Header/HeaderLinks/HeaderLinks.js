import { Component } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { Ul, Nav } from "../HeaderComponents/HeaderComponents";
import { connect } from "react-redux";


class HeaderLinks extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const links = this.props.links.map((item, id) => item.name);
        return(
            <Nav>
                <Ul>
                    {links.map((link, id) => {
                        return (
                            <HeaderLink
                                text={link}
                                link={`/${link}`}
                                key={id}
                            />
                        )
                    })}
                </Ul>
            </Nav>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        ...state.links
    }
}


export default connect(mapStateToProps)(HeaderLinks);