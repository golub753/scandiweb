import { Component } from "react";
import { Block, BlockWrapper ,Image, Info, Name, Price } from '../ProductsComponents/ProductsComponents';

class ProductsBlock extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return (
            <Block data-stock={this.props.inStock}>
                <BlockWrapper>
                    <Image src={this.props.mainImage} alt={this.props.name}/>
                    <Info>
                        <Name>
                            {this.props.name}
                        </Name>
                        <Price>
                            {this.props.prices[0].currency.symbol}{this.props.prices[0].amount}
                        </Price>
                    </Info>
                </BlockWrapper>
            </Block>
        );
    }
}
 
export default ProductsBlock;