import { Component } from "react";
import ProductSlide from "./ProductSlide";
import { Slider, Wrapper } from "./ProductSliderComponents/ProductSliderComponents";

class ProductSlider extends Component {
    constructor(props) {
        super(props)
        this.position = 0
        this.slidesToView = 6
        this.state= {
            nextPosition: 0
        }
    }
    nextSlide() {
        ++this.position;
        if (this.position > (this.props.items.length - this.slidesToView)) {
            this.position = 0;
        }
        this.setState({nextPosition: `translateY(-${this.position * (Math.floor(100 / this.slidesToView))}%)`})
    }
    componentDidMount() {
        this.interval = setInterval(() => this.nextSlide(), 5000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() { 
        return (
            <Slider>
                <Wrapper style={{transform: this.state.nextPosition}}>
                    {this.props.items.map((item, index) => {
                        return(
                            <ProductSlide
                                src={item}
                                key={index}
                            />
                        )
                    })}
                </Wrapper>
            </Slider>
        );
    }
}
 
export default ProductSlider;