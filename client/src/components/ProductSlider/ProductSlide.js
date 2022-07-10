import { Component } from "react";
import { Slide } from "./ProductSliderComponents/ProductSliderComponents";

class ProductSlide extends Component {
    render() { 
        return (
            <Slide src={this.props.src} alt="Image"/>
        );
    }
}
 
export default ProductSlide;