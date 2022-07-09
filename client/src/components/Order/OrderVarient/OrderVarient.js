import { Component } from "react";
import {Check, CheckColor} from '../OrderComponents/OrderComponents';

class OrderVarient extends Component {
    render() {         
        const checked = this.props.checkedAttributes;
        let find = checked.filter(item => item.name === this.props.name);
        if (find.length <= 0) {
            find = [...this.props.attributes.map((item) => item.items[0])]
        }
        return (
            <>
                {(this.props.name === 'Color') ? 
                <CheckColor checked={(this.props.item.value === (find[this.props.id] ? find[this.props.id].value : (find[0].name === this.props.name) ? find[0].value : false)) ? true : false} bg={this.props.item.value}/>
                :
                <Check checked={(this.props.item.value === (find[this.props.id] ? find[this.props.id].value : (find[0].name === this.props.name) ? find[0].value : false)) ? true : false}>
                    {this.props.item.value}
                </Check>}
            </>
        );
    }
}
 
export default OrderVarient;