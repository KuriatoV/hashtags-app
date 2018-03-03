import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TweetCard from 'components/TweetCard';
import Loading from 'components/Loading';

class TweetList extends Component {
  render() {
    const { tweetList, isLoading,moreTweetsToLoad,searchText } = this.props;
    return (
      <div className='tweet-list'>
        {  (!tweetList.length && !isLoading) &&
          <div className="no-tweets">No tweets found. Please try another hashtag.</div> }

        { tweetList.map( ( tweet, index ) => (
          <TweetCard key={ tweet.id_str+'t' } tweet={ tweet }  />
        ) ) }

        { isLoading ?  <Loading /> :
        moreTweetsToLoad &&
        <div  className="load-more-container" >
							<button  className="load-more-btn"  onClick={this.props.loadMore}>
								  Load More
							</button>
              </div>
              }
      </div>
    )
  }
}

TweetList.propTypes = {
  tweetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  moreTweetsToLoad:PropTypes.bool

};

export default TweetList;
