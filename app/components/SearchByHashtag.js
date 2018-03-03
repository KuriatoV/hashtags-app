import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { resetTweetsState } from 'redux/actions/tweets';
import { connect } from 'react-redux';

class SearchByHashtag extends Component {
  submitForm=( e )=> {
    const { onHandleSearch,resetTweetsState,searchText } = this.props;
    e.preventDefault();
    if ( searchText !== '') {
      onHandleSearch('#'+searchText);
    }else{
      resetTweetsState()
    }
  }

  render() {
    const { searchText } = this.props;
    return (
      <div className="search-form">
        <form onSubmit={ this.submitForm }>
          <input
            value={ searchText }
            onChange={ this.props.handleInputChange }
            placeholder='Put hashtag here'
            />

          <button onClick={ this.submitForm }>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>

      </div>
    )
  }
}

SearchByHashtag.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
}




export default connect(null, {
	resetTweetsState,
	
})(SearchByHashtag);
