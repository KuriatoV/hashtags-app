
const initialState = {
  tweets: [],
  lastTweetId: '',
  moreTweetsToLoad: false,
  isLoading: false,
  wasRequest:false,
  error: ''
}



const tweetsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'RESET_TWEETS_STATE':{
    return   initialState
      }
    case 'FETCHING_TWEETS':
      return {
        ...state,
        isLoading: true,
      }
    case 'FETCHING_TWEETS_SUCCESS':{
    const nextTweets=[... state.tweets,...action.tweets]
    
      return {
        tweets:nextTweets,
        lastTweetId: action.lastTweetId,
        moreTweetsToLoad: action.moreTweetsToLoad,
        isLoading: false,
        wasRequest:true,
        error: ''
      }
    }
      case 'FETCHING_TWEETS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Server error',
      }
    default:
      return state;
  }
}

export default tweetsReducer;
