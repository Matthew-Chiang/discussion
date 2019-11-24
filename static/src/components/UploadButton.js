import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default class UploadButtons extends React.Component {
    state = {
        selectedFile:null,
    }

    onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0]
        })
        this.props.callBack()
      }

    render () {
        return (
            <div>
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={this.onChangeHandler}
                    />
                </Button>
            </div>
        );
  }
}