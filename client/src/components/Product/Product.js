import { Component } from "react";
import Container from '../../containers/Container';
import { ProductWrapper, Wrapper, Image, Info, Brand, Name, Title, Checks, Button, Description, ImagesWrapper } from "./ProductComponents/ProductComponents";
import ProductVarient from "./ProductVarient/ProductVarient";
import { connect } from 'react-redux';
import ProductCost from "./ProductCost/ProductCost";
import { addOrderAction } from "../../store/ordersReducer";
import ProductSlider from "../ProductSlider/ProductSlider";

class Product extends Component {
    constructor(props) {
        super(props);
        this.id =  window.location.pathname.split('/').pop()
        this.product = this.props.allProducts.find(item => item.id === this.id);
        this.getActiveAttribute = this.getActiveAttribute.bind(this);
        this.state = {
            product: {
                id: this.product.id,
                name: this.product.name,
                brand: this.product.brand,
                photo: this.product.gallery[0],
                attributes: this.product.attributes,
                prices: this.product.prices,
                counter: 1,
                images: this.product.gallery,
                checkedAttributes: []
            },
            image: this.product.gallery[0]
        }
    }
    addOrder(product) {
        this.props.addOrder(product)
    }
    getActiveAttribute(name, value) {
        const newItem = {name, value};
        if (this.state.product.checkedAttributes.length <= 0) {
            const product = this.state.product.checkedAttributes;
            product.push({...newItem, name})
            this.setState({...this.state.product, checkedAttributes: product})
        } else {
            const inState = this.state.product.checkedAttributes.some(item => item.name === name);
            if (inState) {
                const attributes = this.state.product.checkedAttributes.slice();
                attributes.forEach(item => {
                    if (item.name === name) {
                        item.value = value;
                    } 
                })
                this.setState({...this.state.product, checkedAttributes: attributes})
            } else {
                const {checkedAttributes} = this.state.product;
                checkedAttributes.push(newItem)
                this.setState({...this.state.product, checkedAttributes: [...checkedAttributes]})
            }
        }
    }
    render() {
        return (
            <ProductWrapper>
                <Container>
                    <Wrapper>
                    {(this.product.gallery.length > 1) ? 
                        <ImagesWrapper>
                            <ProductSlider items={this.product.gallery}/>
                            <Image src={this.state.image}/>
                        </ImagesWrapper>
                        :
                        <Image src={this.state.image}/>
                    }
                        <Info>
                            <Brand>
                                {this.product.brand}
                            </Brand>
                            <Name>
                                {this.product.name}
                            </Name>
                            {this.product.attributes.map((item, key) => {
                                return (
                                    <div key={key}>
                                    <Title>
                                        {item.name}:
                                    </Title>
                                    <Checks>
                                        {item.items.map((val, id) => {
                                            return (
                                                <ProductVarient index={id} key={id} name={this.product.name} displayValue={val.displayValue} value={val.value} check={(id === 0) ? true: false} title={item.name} getActiveAttribute={this.getActiveAttribute}/>
                                            )
                                        })}
                                    </Checks>
                                    </div>
                                )
                            })}
                            <ProductCost product={this.product}/>
                            <Button onClick={() => this.addOrder(this.state.product)}>ADD TO CART</Button>
                            <Description dangerouslySetInnerHTML={{__html: `${this.product.description}`}}/>
                        </Info>
                    </Wrapper>
 
                </Container>
            </ProductWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.allProducts,
        ...state.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (product) => dispatch(addOrderAction(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);