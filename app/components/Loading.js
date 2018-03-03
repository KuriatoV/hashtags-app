import React from "react";

const Loading = ( props ) => {
	return (
		<div className={`${props.outer ? 'loading outer' : 'loading'}`}>
			<img src="http://localhost:3333/static/assets/img/loading.svg" />
		</div>
	);
}

export default Loading;
