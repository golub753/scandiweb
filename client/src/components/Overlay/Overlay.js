import { Component } from "react";
import { Over } from "./OverlayComponents";
import { connect } from 'react-redux';

class Overlay extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return (
            <Over active={this.props.active}/>
        );
    }
}

const mapStateToProps = (state) => { 
    return {
        ...state.bug
    }
}
 
export default connect(mapStateToProps)(Overlay);