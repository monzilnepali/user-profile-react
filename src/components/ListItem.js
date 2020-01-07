import React, {Component} from 'react';
import '../styles/listItem.css'
class ListItem extends Component {
    render() {
        return (
            <div className="card" onClick={this.props.clickHandler}>
                <img src={this.props.img} alt=""/>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default ListItem;