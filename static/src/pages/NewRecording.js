import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import Recording from '../components/Recording';
import Display from '../pages/Display';


class NewRecording extends React.Component{

    state = {
        showNext : false,
        showText:false,
        transcript :"",
    }



    showNextOnClick = () =>{
        this.setState({showNext:!this.state.showNext})
    }

    showTextOnClick = (transcript_text) => {

        this.setState({showText:!this.state.showText, 
                        transcript:transcript_text,
                        showNext:false})
    }

	render(){

		return (
            <div>
                <My_Button text={'Record Now'} callBack={this.showNextOnClick}/>
                {this.state.showNext &&
                    <Recording callBack={this.showTextOnClick}/>
                }
                {this.state.transcript.length != 0 &&
                    <Display text={this.state.transcript}/>
                }

            </div>
        );
	}
}

export default NewRecording
