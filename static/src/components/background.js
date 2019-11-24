import React from 'react'
import './background.css'


class BackgroundImage extends React.Component{
    state={
        x:0,
        y:0,
    }

    componentWillMount(){
      var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      
      this.setState({x:x,y:y});
    }

    render(){
      return (<div><img className='bg' src={'./images/main.png'} /></div>)
    }  
  }

  export default BackgroundImage;