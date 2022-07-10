import { Component } from "react";
import { MainSlide } from "./SliderComponents/SliderComponents";

class Slide extends Component {
    render() { 
        return (
            <MainSlide src={this.props.src} alt='Slide'/>
        );
    }
}
 
export default Slide;