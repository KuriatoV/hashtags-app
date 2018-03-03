import { combineReducers } from 'redux';

import tweetsReducer from './tweetsReducer';

const rootReducer = combineReducers( {
  tweetList: tweetsReducer,
} );

export default rootReducer;
