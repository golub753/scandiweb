import { Component } from "react";
import { Label, Input, Check, LabelColor } from "../ProductComponents/ProductComponents";

class ProductVarient extends Component {
    render() { 
        const thisId = this.props.index + this.props.name;
        return (
        <Check style={{position: "relative"}}>
            {(this.props.value.indexOf('#') > -1) ? <>
                <LabelColor htmlFor={this.props.index} style={{backgroundColor: this.props.value}}></LabelColor>
                <Input id={this.props.index} type="radio"/>
            </>
            : 
            <>
            <Input defaultChecked={this.props.check} id={thisId} name={this.props.name} type="radio" value={this.props.value}/>
                <Label htmlFor={thisId}>
                    {this.props.value}
                </Label>
            </>
             }
        </Check>
        );
    }
}
 
export default ProductVarient;