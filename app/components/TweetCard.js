import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getDiffDate } from 'utils/utils';

class TweetCard extends Component  {
  
  render() {
    const { user, text, created_at, id_str,entities:{media }} = this.props.tweet;
    const diffDate = getDiffDate( created_at );

    return (
      <div className='tweet-card'>
          <div className='card-header'>
            <div className='user-info'>
              <img src={ user.profile_image_url }/>
              <span><b>{ user.name }</b></span>
              { user.verified ? <i className='fa fa-check-circle' aria-hidden='true'></i> : <span> - </span> }
              <span>@{ user.screen_name }</span>
            </div>
            <div className='tweet-date'>{ diffDate }</div>
          </div>
          <div className='tweet'>
            { text }
          </div>
          <div className='tweet'>
       {media && media.length &&  media.map(each=>
         each.type==='photo' ?
       <img key={each.id} src={`${each.media_url}`} /> 
       :null
     )
       }
      </div>
      </div>
    )
  }
}

TweetCard.propTypes = {
  tweet: PropTypes.object.isRequired,
}

export default TweetCard;
