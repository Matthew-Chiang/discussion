import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import { ReactMic } from 'react-mic';
import { subscribeToTimer } from '../socket/api';
 

class LoadFile extends React.Component{
    state = {
        transcript :"",
    }

    apiCall = async () => {
        try {
            var response = await fetch("api/upload");
            
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
        console.log("load")
        this.apiCall()
    }

	render(){

		return (
            <div>
                <Typography>
                    Loading
                </Typography>

            </div>
            
        );
	}
}

export default LoadFile
