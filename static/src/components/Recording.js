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
        // telling the backend to start recording - should be replaced with a web socket
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
        //socket code
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
                
            </div>
            
        );
	}
}

export default Recording
