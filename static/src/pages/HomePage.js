import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';


class HomePage extends React.Component{
    state = {
        showNext : false
    }

    showNextOnClick = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('start')
    }

	render(){

		return (
            <div>
                <My_Button text={'Start'} callBack={this.showNextOnClick}/>
                {this.state.showNext &&
                    <h1> showing stuff</h1>
                }
            </div>
            
        );
	}
}

export default HomePage
