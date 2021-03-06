import { Component } from "react"
import { BrowserRouter as Router, Routes, Route, matchRoutes} from 'react-router-dom';
import { connect } from 'react-redux';
import { products, links, clothes, tech, currency } from "../query/query";
import { addAllProductsAction } from '../store/productsReducer';
import { getLinksAction } from '../store/linksReducer';
import { getAllClothesAction } from '../store/clothesReducer';
import { getAllTechAction } from '../store/techReducer';
import { getAllCurrencyAction } from "../store/currencyReducer";
import { getInitialCurrencyAction } from '../store/initialCurrencyReducer';
import Header from "./Header/Header";
import Overlay from "./Overlay/Overlay";
import Home from '../pages/Home';
import Clothes from '../pages/Clothes';
import Tech from '../pages/Tech';
import Cart from '../pages/Cart';
import Product from "./Product/Product";
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
    this.props.getCurrency();
    this.props.getInitialCurrency();
  }
  render() {
    return(
      <Router>
        <Header/>
        <Overlay/>
        <Routes>
          <Route exact path="/" element={<Home category="allProducts"/>}/>
          <Route path="all" element={<Home category="allProducts"/>}/>
          <Route path="clothes" element={<Clothes category="clothes"/>}/>
          <Route path="tech" element={<Tech category="tech"/>}/>
          <Route path="/product/:productId" element={<Product/>} /> 
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Get products array
    fetchProduct: () => 
      dispatch(fetchData(products, addAllProductsAction)),
    //Get category name in array
    getLinks: () => {
      dispatch(fetchData(links, getLinksAction))
    },
    //Get clothes
    getClothes: () => {
      dispatch(fetchData(clothes, getAllClothesAction))
    },
    //Get tech
    getTech: () => {
      dispatch(fetchData(tech, getAllTechAction))
    },
    //Get label and currency for prices
    getCurrency: () => {
      dispatch(fetchData(currency, getAllCurrencyAction))
    },
    //Get initial currency
    getInitialCurrency: () => {
      dispatch(fetchData(currency, getInitialCurrencyAction))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);