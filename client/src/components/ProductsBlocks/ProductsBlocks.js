import { Component } from "react";
import ProductsBlock from "./ProductsBlock/ProductsBlock";
import { Wrapper } from "./ProductsComponents/ProductsComponents";
import { connect } from "react-redux";

class ProductsBlocks extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        const products = (this.props.category === 'allProducts')
        ? this.props.allProducts
        : (this.props.category === "clothes")
        ? this.props.clothes 
        : (this.props.category === "tech") 
        ? this.props.tech : false
        return (
            <Wrapper>
                {products.map((product, id) => {
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
                            getProduct={() => this.props.getProduct(product)}
                        />
                    )
                })}
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({ 
    ...state.allProducts, 
    ...state.clothes, 
    ...state.tech
  })
 
export default connect(mapStateToProps)(ProductsBlocks);