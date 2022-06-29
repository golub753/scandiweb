import { Component } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { addAllProductsAction } from '../store/productsReducer';
import Header from "./Header/Header";
import Home from '../pages/Home';
import Women from '../pages/Women';
import Men from '../pages/Men';
import Kids from '../pages/Kids';
import Cart from '../pages/Cart';
import { fetchProducts } from '../asyncActions/products';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProduct();
  }
  render() {
    return(
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProducts(`{
      categories {
        name, products {
          name, inStock, brand, id, gallery, prices {
            amount
            currency {
              label, symbol
            }
          }
        }
      }
    }`, addAllProductsAction))
  }
}

const mapStateToProps = (state) => ({ products: state.products })


export default connect(mapStateToProps, mapDispatchToProps)(App);