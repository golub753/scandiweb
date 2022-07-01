import { Component } from "react";
import ProductsBlock from "./ProductsBlock/ProductsBlock";
import { Wrapper } from "./ProductsComponents/ProductsComponents";

class ProductsBlocks extends Component {
    constructor(props) {
        super(props)
        this.products = this.props.products;
    }
    render() { 
        return (
            <Wrapper>
                {this.products.map((product, id) => {
                    return (
                        <ProductsBlock
                            key={id}
                            id={product.id}
                            item={product}
                            name={product.name}
                            brand={product.brand}
                            category={product.category}
                            inStock={product.inStock}
                            mainImage={product.gallery[0]}
                            prices={product.prices}
                        />
                    )
                })}
            </Wrapper>
        );
    }
}
 
export default ProductsBlocks;