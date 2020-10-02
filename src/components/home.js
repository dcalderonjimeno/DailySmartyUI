import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

export default class Home extends Component {

  handleSearchBarSumbit(query) {
    console.log('trying to handle SUbmit for query', query);
    this.props.history.push('./results');
  }

  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar onSumbit={(query) => this.handleSearchBarSumbit(query)}/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}
