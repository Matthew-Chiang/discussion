import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import UploadButton from '../components/UploadButton';
import LoadFile from '../components/LoadFile';


class FileUpload extends React.Component{

    state = {
        showNext : false,
        transcript: ""
    }

    showNextOnClick = () =>{
        console.log("next")
        this.setState({showNext:true})
        console.log(this.state.showNext)
        // this.props.changePage('loading')
    }

    showTextOnClick = (transcript_text) => {
        this.setState({ transcript:transcript_text,
                        showNext:false})
    }

	render(){

		return (
            <div>
                <UploadButton text={'Upload File'} callBack={this.showNextOnClick}/>

                {this.state.showNext &&
                    <LoadFile callBack={this.showTextOnClick}/>
                }

                {this.state.transcript.length > 0 &&
                    <Typography>
                        {this.state.transcript}
                    </Typography>
                }
            </div>


        );
	}
}

export default FileUpload
