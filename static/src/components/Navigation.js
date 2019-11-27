import React from 'react';

import Typography from '@material-ui/core/Typography';
import NavButton from '../components/NavButton';
import MainMenuButton from '../components/MainMenuButton'

class Navigation extends React.Component{

    state = {
        showNext : false
    }

    showNextOnClick1 = () =>{
        this.props.changePage('home')
    }

    showNextOnClick2 = () =>{
        this.props.changePage('record')
    }

    showNextOnClick3 = () =>{
        this.props.changePage('upload')
    }

    showNextOnClick4 = () =>{
        this.props.changePage('home')
    }

	render(){

		return (
            <div>
                <MainMenuButton 
                    text={'Discussion'} 
                    callBack={this.showNextOnClick1}/>
                <NavButton 
                    text={'Recording'} 
                    callBack={this.showNextOnClick2}/>
                <NavButton 
                    text={'Files'} 
                    callBack={this.showNextOnClick3}/>
                <NavButton 
                    text={'Account'} 
                    callBack={this.showNextOnClick4}/>
            </div>
        );
	}
}

export default Navigation
