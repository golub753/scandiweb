import { Component } from "react";
import { Label, Input, Check, LabelColor } from "../ProductComponents/ProductComponents";

class ProductVarient extends Component {
    render() { 
        return (
        <Check>
            {(this.props.value.indexOf('#') > -1) ? <>
                <LabelColor isActive={this.props.isAction} style={{backgroundColor: this.props.value}}></LabelColor>
                <Input/>
            </>
            : 
            <>
                <Label isActive={this.props.isAction}>{this.props.value}</Label>
                <Input/>
            </>
             }
        </Check>
        );
    }
}
 
export default ProductVarient;