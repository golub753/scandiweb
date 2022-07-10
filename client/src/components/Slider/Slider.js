import { Component } from "react";
import { Main, Wrapper, Prev, Next, Arrow, ArrowPrev } from "./SliderComponents/SliderComponents";
import Slide from "./Slide";

class Slider extends Component {
    constructor(props) {
        super(props)
        this.position = 0
        this.slidesToView = 1
        this.state= {
            nextPosition: 0
        }
    }
    nextSlide() {
        ++this.position;
        if (this.position > (this.props.items.length - this.slidesToView)) {
            this.position = 0;
        }
        this.setState({nextPosition: `translateX(-${this.position * (Math.floor(100 / this.slidesToView))}%)`})
    }
    prevSlide() {
        --this.position;
        if (this.position < 0) {
            this.position = this.props.items.length - this.slidesToView;
        }
        this.setState({nextPosition: `translateX(-${this.position * (Math.floor(100 / this.slidesToView))}%)`})
    }
    render() { 
        return (
            <Main>
                <Wrapper style={{transform: this.state.nextPosition}}>
                    {this.props.items.map((item, index) => {
                        return (
                            <Slide
                                src={item}
                                key={index}
                            />
                        )
                    })}
                </Wrapper>
                <Prev onClick={() => this.prevSlide()}>
                    <ArrowPrev src="../images/icons/slider-arr.svg" alt="slider-arr"/>
                </Prev>
                <Next onClick={() => this.nextSlide()}>
                    <Arrow src="../images/icons/slider-arr.svg" alt="slider-arr"/>
                </Next>
            </Main>
        );
    }
}
 
export default Slider;