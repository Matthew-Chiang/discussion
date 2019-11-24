import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import UploadButton from '../components/UploadButton';


class FileUpload extends React.Component{

    state = {
        showNext : false
    }

    showNextOnClick = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('loading')
    }

	render(){

		return (
            <div>
                <UploadButton text={'Upload File'} callBack={this.showNextOnClick}/>
            </div>
        );
	}
}

export default FileUpload
