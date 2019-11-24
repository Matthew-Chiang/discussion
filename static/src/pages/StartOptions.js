import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';


class StartOptions extends React.Component{
    state = {
        showNext : false
    }

    showNextOnClick1 = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('record')
    }

    showNextOnClick2 = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('upload')
    }

	render(){

		return (
            <div>
                <My_Button text={'New Recording'} callBack={this.showNextOnClick1}/>
                <My_Button text={'Upload a File'} callBack={this.showNextOnClick2}/>
            </div>
        );
	}
}

export default StartOptions
