import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';


class Loading extends React.Component{

	render(){

		return (
            <div>
                <My_Button text={'Upload File'}/>
            </div>
        );
	}
}

export default Loading
