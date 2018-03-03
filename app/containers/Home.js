import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTweetList, resetTweetsState } from 'redux/actions/tweets';

import SearchByHashtag from 'components/SearchByHashtag';
import TweetList from 'components/TweetList';
import TweetGrid from 'components/TweetGrid';
import Loading from 'components/Loading';
import { isNull } from "util";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  searchText: ''
		}
	 }
	
  
	 handleInputChange=( e )=> {
	
		this.setState( { searchText: e.target.value } )
	 }


loadMore=()=>{
		  const { getTweetList, tweetList } = this.props;
	  const { isLoading, latestSearches, lastTweetId,
		lastSearch, moreTweetsToLoad } = tweetList;
			return getTweetList( lastSearch, lastTweetId );

	}

	handleSearch=( search )=> {
		const { getTweetList, resetTweetsState } = this.props;
		resetTweetsState();
		getTweetList( search );
	}

	render () {
		const {searchText}=this.state
		const { tweetList,tweetList:{tweets,isLoading,wasRequest,error},moreTweetsToLoad } = this.props;
		return (
			<section className="container home">
				<SearchByHashtag
			   	searchText={searchText}
					handleInputChange={this.handleInputChange}
					onHandleSearch={ this.handleSearch }
					/>
				{	isLoading && !tweets.length && <Loading outer={true} />}
{wasRequest  &&
				<div className="content">
						<div className="tweets-block">
							<TweetList
							  tweetList={ tweets }
							  isLoading={ isLoading }
							  loadMore={this.loadMore}
							  moreTweetsToLoad={moreTweetsToLoad}
							  /> 
						
						</div>
						<div className="tweets-block">
							<TweetGrid
						    	 tweets={ tweets }
								  isLoading={ isLoading }
								  moreTweetsToLoad={moreTweetsToLoad} 
								  loadMore={this.loadMore}
								  /> 
						</div>
					
					</div> 
								}
					
			</section>
		)
	}
}

Home.propTypes = {
	tweetList: PropTypes.shape({
		tweets: PropTypes.array,
		lastTweetId: PropTypes.string,
		moreTweetsToLoad: PropTypes.bool,
		isLoading: PropTypes.bool,
		wasRequest:PropTypes.bool ,
		error: PropTypes.string
	}).isRequired,

	getTweetList: PropTypes.func.isRequired,
	resetTweetsState: PropTypes.func.isRequired,
}

const mapStateToProps = ( state ) => {
	return {
		tweetList: state.tweetList,
		moreTweetsToLoad:state.tweetList.moreTweetsToLoad,
		wasResponse:state.tweetList.wasResponse,
	}
}

export default connect(
	mapStateToProps,
	{
		getTweetList,
		resetTweetsState
	}
)( Home );
