import api from 'utils/api';
import queryString from 'query-string';

const fetchingTweets=()=> {
  return {
    type: 'FETCHING_TWEETS'
  };
}

const fetchingTweetsSuccess=( data, search )=>{
  const {tweets:{statuses,search_metadata:{next_results}}}=data
  const nextMaxId = queryString.parse(next_results);
  return {
    type: 'FETCHING_TWEETS_SUCCESS',
    tweets: statuses,
    search,
    moreTweetsToLoad: Boolean(next_results),
    lastTweetId: nextMaxId.max_id,
  };
}

const fetchingTweetsError=()=> {
  return {
    type: 'FETCHING_TWEETS_ERROR'
  };
}

export const resetTweetsState=()=> {
  return ( dispatch ) => dispatch(
    { type: 'RESET_TWEETS_STATE' }
  );
}

export const getTweetList=( search, max_id,cursor )=> async( dispatch ) => {
  try{
    dispatch( fetchingTweets() );
    const tweets=await api.getTweets( search, max_id,cursor )

    dispatch( fetchingTweetsSuccess(tweets, search))
  }
  catch(e){
    console.log('err',e)
    dispatch( fetchingTweetsError() )
  }

  }

