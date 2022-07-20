import { Component } from "react";
import { Li, Path } from "../HeaderComponents/HeaderComponents";
import { connect } from 'react-redux';
import { closeTogglersAction } from '../../../store/bugReducer';

class HeaderLink extends Component {
    constructor(props) {
        super(props)
        this.text = this.props.text;
        this.link = this.props.link;
    }
    render() {
        return(
            <Li>
                <Path to={this.link} onClick={() => this.props.closeTogglers()}>{this.text}</Path>
            </Li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeTogglers: () => dispatch(closeTogglersAction())
    }
}
 

export default connect(null, mapDispatchToProps)(HeaderLink);