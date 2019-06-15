import React, {Component} from 'react';
import './style.css';
  
export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render(){
    return (
        <input
            type="text"
            className="search-input search-input-panel"
            onChange={this.onSearchChange}
            placeholder="Type here to search"
            value={this.state.term}
          />
      
    );
  }
}
