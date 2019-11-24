import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const styles = {
//     Button:{
//         padding: '20px',
//         background: '#639CF9',
//         color: 'black',
//     }
// }

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
                    style = {{background:'#639CF9', borderRadius: '50px', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.4)", color:"#FFFFFF"}}
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

export default UploadButtons