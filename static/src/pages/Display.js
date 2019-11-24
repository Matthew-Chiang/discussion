import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import './Display.css'
// import Background from '../image/Desktop.png';

// var sectionStyle = {
//     // width: "100%",
//     // height: "400px",
//     // backgroundImage: `url(${Background})`,
//     backgroundImage: "url(" + Background + ")"
//   };

class HomePage extends React.Component{
    state = {
        showNext : false
    }

    showNextOnClick = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('start')
    }

	render(){

		return (
            <div className="display_image">
                <Navigation/>
                
            </div>
            
        );
	}
}

export default HomePage
