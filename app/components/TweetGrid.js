import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {chunk} from 'lodash'
import TweetCard from 'components/TweetCard';
import Loading from 'components/Loading';


class TweetGrid extends Component {
  render() {
    const { tweets, isLoading,moreTweetsToLoad } = this.props;
    const newT=chunk(tweets,10)
    return (
      <div className='tweet-grid-style'>
        {!tweets.length && !isLoading &&
          <div className="no-tweets with-margin">No tweets found. Please try another hashtag.</div> }

        {newT.length>0 && newT.map( ( group, idx ) => {
     const currentClassName=group.length===1 ?   'wrapper-for-1 ' : group.length===2 ?' wrapper-for-2' :  ' wrapper-for-10'

     
 return(

 <div key={idx} className={currentClassName}>{

   group.map((tweet,i)=>

      <div
      className="tweet-cell"
      key={tweet.id_str+'g'}
       >
       <div className="media-cropp">
    {   tweet.entities.media ?  <img  className="image-cropped" src={  tweet.entities.media[0].media_url }  />: null}
          <div className="text-overlay-wrapper">
        <div className="author-wrapper">
            <i className='fa fa-twitter ic' aria-hidden='true'></i>
           <a > <div className="author-name-screenname">{tweet.user.name} @{tweet.user.screen_name}</div></a>
           </div>
          <div className='tweet-text-grid'>{tweet.text}</div>
           </div>
          </div>
      </div>)}
  </div>
 ) }  ) }
      
  { isLoading ? <Loading />:
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

TweetGrid.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  moreTweetsToLoad:PropTypes.bool
};

export default TweetGrid;



