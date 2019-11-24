import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import Recording from '../components/Recording';


class NewRecording extends React.Component{

    state = {
        showNext : false
    }

    showNextOnClick = () =>{
        this.setState({showNext:!this.state.showNext})
        // this.props.changePage('loading')
    }

	render(){

		return (
            <div>
                <My_Button text={'Record Now'} callBack={this.showNextOnClick}/>
                {this.state.showNext &&
                    <Recording />
                }
            </div>
        );
	}
}

export default NewRecording
