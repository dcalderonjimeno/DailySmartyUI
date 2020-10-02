import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {

    handleSearchBarSumbit(query) {
        
    }

    render() {
        return (
            <div>
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSumbit(query)}/>
            </div>
        )
    }
}

export default Results;