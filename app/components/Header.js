import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { resetTweetsState } from 'redux/actions/tweets';

class Header extends Component {

	handleResetApp=()=> {
		this.props.resetTweetsState();
	}

	render() {
		return (
			<div className='header'>
				<Link to='/' onClick={this.handleResetApp}>
					<i className='fa fa-twitter' aria-hidden='true'></i>
					<h1>Twitter Search by hashtag </h1>
				</Link>
			</div>
		)
	}
}

export default connect(null, {
	resetTweetsState,
	
})(Header);
