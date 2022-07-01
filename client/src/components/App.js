import { Component } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { products, links, clothes, tech, currency } from "../query/query";
import { addAllProductsAction } from '../store/productsReducer';
import { getLinksAction } from '../store/linksReducer';
import { getAllClothesAction } from '../store/clothesReducer';
import { getAllTechAction } from '../store/techReducer';
import { getAllCurrencyAction } from "../store/currencyReducer";
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
    this.props.getCurrency();
  }
  render() {
    return(
      <Router>
        {(this.props.links.links.length > 0) ? <Header links={this.props.links.links} currency={this.props.currency.currency.currencies}/> : false}
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
    }
  }
}

const mapStateToProps = (state) => ({ 
  allProducts: state.allProducts, 
  links: state.links, 
  clothes: state.clothes, 
  tech: state.tech, 
  currency: state.currency 
})


export default connect(mapStateToProps, mapDispatchToProps)(App);