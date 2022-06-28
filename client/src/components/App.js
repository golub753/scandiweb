import { Component } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Header/Header";
import Home from '../pages/Home';
import Women from '../pages/Women';
import Men from '../pages/Men';
import Kids from '../pages/Kids';
import Cart from '../pages/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return(
      <Header/>
    )
  }
}

export default App;