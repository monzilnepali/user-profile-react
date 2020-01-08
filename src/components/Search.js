import React, {Component} from 'react';
import '../styles/search.css'
class Search extends Component {


    render() {
        return (
            <input className="search-field" type="text" placeholder="Search here" value={this.props.searchData} onChange={this.props.handler}/>
        );
    }
}

export default Search;