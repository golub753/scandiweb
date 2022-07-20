import { Component } from "react";
import { Over } from "./OverlayComponents";
import { connect } from 'react-redux';
import {closeTogglersAction} from '../../store/bugReducer';

class Overlay extends Component {
    constructor(props){
        super(props)
        this.clickOverlay = this.clickOverlay.bind(this);
    }
    clickOverlay() {
        this.props.toggleOverlay();
    }
    render() { 
        return (
            <Over active={this.props.active} onClick={() => this.clickOverlay()}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOverlay: () => dispatch(closeTogglersAction())
    }
}
 

const mapStateToProps = (state) => { 
    return {
        ...state.bug
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Overlay);