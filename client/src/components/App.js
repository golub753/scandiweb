import { Component } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { addAllProductsAction } from '../store/productsReducer';
import Header from "./Header/Header";
import Home from '../pages/Home';
import Clothes from '../pages/Clothes';
import Tech from '../pages/Tech';
import Cart from '../pages/Cart';
import { fetchProducts } from '../asyncActions/products';
import Loader from '../UI/Loader/Loader';

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
          <Route exact path="/" element={(this.props.products.products.length > 0) ? <Home products={this.props.products.products}/> : <Loader/>}/>
          <Route path="/" element={(this.props.products.products.length > 0) ? <Home products={this.props.products.products}/> : <Loader/>}/>
          <Route path="/clothes" element={<Clothes/>}/>
          <Route path="/tech" element={<Tech/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => setTimeout(() => {
      dispatch(fetchProducts(`{
        categories {
          name, products {
            id, name, inStock, brand, category, gallery, prices {
              amount
              currency {
                label, symbol
              }
            }
          }
        }
      }`, addAllProductsAction))
    }, 300)
  }
}

const mapStateToProps = (state) => ({ products: state.products })


export default connect(mapStateToProps, mapDispatchToProps)(App);