import "whatwg-fetch";
import _ from "lodash";

const getTweets = ( search, max_id = '' ) => {
	const encodedSearch = encodeURIComponent(search);

	return fetch(`http://localhost:3333/tweets/${encodedSearch}/${max_id}`)
		.then( res => res.json() );
}

const api = {
	getTweets
}

export default api;
