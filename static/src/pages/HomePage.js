import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import './HomePage.css'
// import Background from '../image/Desktop.png';

// var sectionStyle = {
//     // width: "100%",
//     // height: "400px",
//     // backgroundImage: `url(${Background})`,
//     backgroundImage: "url(" + Background + ")"
//   };

class HomePage extends React.Component{
    state = {
        showNext : false,
        control:''
    }

    showNextOnClick = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('start')
    }

    controlCallBack = (pageName)=>{
    this.setState({control:pageName})
    }

	render(){

		return (
            <div className="main-image-first">
                <Navigation />
                <My_Button text={'Start'} callBack={this.showNextOnClick}/>
                {this.state.showNext &&
                    <h1> showing stuff</h1>
                }
            </div>
            
        );
	}
}

export default HomePage
