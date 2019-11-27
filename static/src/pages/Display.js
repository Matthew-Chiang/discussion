import React from 'react';
import My_Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Navigation from '../components/Navigation';
import './Display.css'
// import Background from '../image/Desktop.png';

class HomePage extends React.Component{
    state = {
        showNext : false,
        score:0,
        topics : []
    }

    componentDidMount(){
        this.apiCall();
    }

    apiCall = async () => {
        try {
            var response = await fetch('api/topics',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }, 
                method: 'POST',
                body: JSON.stringify({text:this.props.text})
            });
            
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const topics = json.topics;

            this.setState({
                score:json.score,
                topics:json.topics
            })

            console.log(json)
        } catch (error) {
            console.log(error);
        }
      };

    showNextOnClick = () =>{
        this.setState({showNext:!this.state.showNext})
        this.props.changePage('start')
    }

	render(){

		return (
            <div className="display_image">
                <Navigation/>

                <p style={{maxWidth:'600px', textAlign:'center', paddingTop:'125px', paddingLeft:'325px', paddingBottom:'20px'}}>
                    {this.props.text}
                </p>

                <p style={{textAlign:'center', paddingTop:'0px'}}>
                    The five most likley topics are:
                </p>

                {this.state.topics.map((row)=>(
                    <p style={{textAlign:'center', paddingTop:'0px'}}>
                        {row[1]}
                    </p>
                ))}

                <p style={{textAlign:'center', paddingTop:'0px'}}>
                    We are {Number(this.state.score).toFixed(2)*100} percent certain.
                </p>
                {typeof this.state.score}

                
            </div>
            
        );
	}
}

export default HomePage
