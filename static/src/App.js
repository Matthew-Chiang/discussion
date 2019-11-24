import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/HomePage';
import StartOptions from './pages/StartOptions';
import NewRecording from './pages/NewRecording';
import FileUpload from './pages/FileUpload';
import Navigation from './components/Navigation';
import Loading from './pages/Loading';

// import BackgroundImage from './components/background';

import Background from './image/main.png';

var sectionStyle = {
  // width: "100%",
  // height: "400px",
  // backgroundImage: `url(${Background})`,
  backgroundImage: "url(" + Background + ")"
};

class App extends React.Component{
  state = {
    control : 'home',
  }

  controlCallBack = (pageName)=>{
    this.setState({control:pageName})
  }

  switchPages = (param) =>{
    switch(param) {
      case 'home':
        return(
          <HomePage changePage={this.controlCallBack}/>
        );
      case 'start':
        return(
          <StartOptions changePage={this.controlCallBack}/>
        );
      case 'record':
        return(
          <NewRecording changePage={this.controlCallBack}/>
        );
      case 'upload':
        return(
          <FileUpload changePage={this.controlCallBack}/>
        );
      case 'loading':
        return(
          <Loading changePage={this.controlCallBack}/>
        )
    }
  }

  render(){
    return (
      <div className="main-image-first">
        {/* <section style={ sectionStyle }> */}
        {/* <BackgroundImage/> */}
        <Navigation changePage={this.controlCallBack}/>
        {this.switchPages(this.state.control)}
        {/* </section> */}
      </div>
      // <Typography>hello from typeography</Typography>
    );
  }
  
}

// .main-image-first {
//   /* position: relative; */
//   background-image: url('./images/abstract-access.jpg');
//   height: 500px;
//   width: 200px;
// }


export default App;
