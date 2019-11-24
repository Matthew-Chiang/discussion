import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default class UploadButtons extends React.Component {
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
                    />
                </Button>
            </div>
        );
  }
}