import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import { ReactMic } from 'react-mic';
 

class Recording extends React.Component{
    state = {
        record : false
    }

    componentDidMount(){
        this.setState({record:true})
    }

    stopRecording = ()=> {
        this.setState({record:false})
    }

    onData = (recordedBlob) =>{
        console.log('chunk', recordedBlob)
    }

	render(){

		return (
            <div>
                <Typography>
                    Recording
                </Typography>

                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081" 
                />

                <My_Button text={'Stop Recording'} callBack={this.stopRecording}/>
            </div>
            
        );
	}
}

export default Recording
