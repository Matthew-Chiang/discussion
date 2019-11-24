import React from 'react';

import Typography from '@material-ui/core/Typography';
import NavButton from '../components/NavButton';

class Navigation extends React.Component{

    state = {
        showNext : false
    }

    showNextOnClick1 = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('home')
    }

    showNextOnClick2 = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('options')
    }

    showNextOnClick3 = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('home')
    }

    showNextOnClick4 = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('home')
    }

	render(){

		return (
            <div>
                <NavButton text={'Project Name'} callBack={this.showNextOnClick1}/>
                <NavButton text={'Recording'} callBack={this.showNextOnClick1}/>
                <NavButton text={'Files'} callBack={this.showNextOnClick1}/>
                <NavButton text={'Account'} callBack={this.showNextOnClick1}/>
            </div>
        );
	}
}

export default Navigation
