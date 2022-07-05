import { Component } from "react";
import { Label, Input,InputColor, Check, LabelColor } from "../ProductComponents/ProductComponents";

class ProductVarient extends Component {
    render() { 
        const thisId = this.props.index + this.props.name + this.props.title;
        return (
        <Check style={{position: "relative"}}>
            {(this.props.value.indexOf('#') > -1) ? <>
                <InputColor id={this.props.index} name={this.props.title} type="radio" defaultChecked={this.props.check} bg={this.props.value}/>
                <LabelColor htmlFor={this.props.index} style={{backgroundColor: this.props.value}}/>
            </>
            : 
            <>
            <Input defaultChecked={this.props.check} id={thisId} name={this.props.title} type="radio" value={this.props.value}/>
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