import { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return(
      <div>
        {this.state.products.map((product, id) => {
          return <div key={id}>{product}</div>
        })}
      </div>
    )
  }
}

export default App;