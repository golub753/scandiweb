import { Component } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { addAllProductsAction } from '../store/productsReducer';
import { getLinksAction } from '../store/linksReducer';
import { getAllClothesAction } from '../store/clothesReducer';
import { getAllTechAction } from '../store/techReducer';
import Header from "./Header/Header";
import Home from '../pages/Home';
import Clothes from '../pages/Clothes';
import Tech from '../pages/Tech';
import Cart from '../pages/Cart';
import { fetchData } from '../asyncActions/asyncFunction';
import Loader from '../UI/Loader/Loader';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProduct();
    this.props.getLinks();
    this.props.getClothes();
    this.props.getTech();
  }
  render() {
    return(
      <Router>
        {(this.props.links.links.length > 0) ? <Header links={this.props.links.links}/> : false}
        <Routes>
          <Route exact path="/" element={(this.props.allProducts.allProducts.length > 0) ? <Home products={this.props.allProducts.allProducts}/> : <Loader/>}/>
          <Route path="/all" element={(this.props.allProducts.allProducts.length > 0) ? <Home products={this.props.allProducts.allProducts}/> : <Loader/>}/>
          <Route path="/clothes" element={(this.props.clothes.clothes.length > 0) ? <Clothes products={this.props.clothes.clothes}/> : <Loader/>}/>
          <Route path="/tech" element={(this.props.tech.tech.length > 0) ? <Tech products={this.props.tech.tech}/> : <Loader/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Get products array
    fetchProduct: () => 
      dispatch(fetchData(`{
        category(input: { title: "all" }) {
          products {
            id
            name
            inStock
            brand
            category
            gallery
            prices {
              amount
              currency {
                label
                symbol
              }
            }
          }
        }
      }`, addAllProductsAction)),
    //Get category name in array
    getLinks: () => {
      dispatch(fetchData(`{
        categories {
          name
        }
      }`
      , getLinksAction))
    },
    //Get clothes
    getClothes: () => {
      dispatch(fetchData(`{
        category(input: { title: "clothes" }) {
          products {
            id
            name
            inStock
            brand
            category
            gallery
            prices {
              amount
              currency {
                label
                symbol
              }
            }
          }
        }
      }`, getAllClothesAction))
    },
    //Get tech
    getTech: () => {
      dispatch(fetchData(`{
        category(input: { title: "tech" }) {
          products {
            id
            name
            inStock
            brand
            category
            gallery
            prices {
              amount
              currency {
                label
                symbol
              }
            }
          }
        }
      }`, getAllTechAction))
    }
  }
}

const mapStateToProps = (state) => ({ allProducts: state.allProducts, links: state.links, clothes: state.clothes, tech: state.tech })


export default connect(mapStateToProps, mapDispatchToProps)(App);