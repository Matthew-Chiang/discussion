import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// const useStyles = makeStyles({
// 	root: {
// 		width: '249 px',
// 		height: '76 px',
// 		background: '#639CF9',
// 		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.4)',
// 		borderRadius: '50px',
// 	},
// });



class NavButton extends React.Component{
	// const buttonClass = clsx(useStyles.root);
	onClick = () =>{
		if (this.props.callBack){
			this.props.callBack()
		}
	}

	render(){

		return(
			<Button onClick={this.onClick}>
				{this.props.text}
			</Button>
		);
	}
}

export default NavButton
