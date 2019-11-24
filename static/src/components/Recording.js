import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import { ReactMic } from 'react-mic';
import { subscribeToTimer } from '../socket/api';
 

class Recording extends React.Component{
    state = {
        record : false,
        transcript :"",
    }

    apiCall = async () => {
        try {
            var response = await fetch("api/record");
            
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const text = json.transcript;
            console.log(json)
            this.setState({ transcript: text},()=>{
                this.props.callBack(text)
            })
        } catch (error) {
            console.log(error);
        }
      };


    componentDidMount(){
        this.setState({record:true})
        this.apiCall()
    }

    stopRecording = ()=> {
        this.setState({record:false})
    }

    onData = (recordedBlob) => {
        console.log('chunk')
        // console.log('chunk', recordedBlob)
        // subscribeToTimer((recordedBlob));
    };

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
                {/* {this.state.transcript.length > 0 &&
                    <Typography>
                        {this.state.transcript}
                    </Typography>
                } */}
                

                <My_Button text={'Stop Recording'} callBack={this.stopRecording}/>
            </div>
            
        );
	}
}

export default Recording
