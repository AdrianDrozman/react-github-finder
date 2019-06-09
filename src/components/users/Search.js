import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Search extends Component {
  state = {
    text: ''
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    if(this.state.text ===''){
      this.props.setAlert('Please enter something','light');
    }else{

    
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }
};

  static propTypes={
      searchUsers:PropTypes.func.isRequired,
      clearUsers:PropTypes.func.isRequired,
      setAlert:PropTypes.func.isRequired
  }

  render() {
    const {showClear,clearUsers} = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear &&
        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        }
        </div>
    );
  }
}

export default Search;
