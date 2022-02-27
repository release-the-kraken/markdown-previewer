import React from 'react';


class Preview extends React.Component{	
	render(){
		return(
		<div id="preview-display" dangerouslySetInnerHTML={this.props.markedContent} >
    	
		</div>
		)
	}

}
export default Preview; 