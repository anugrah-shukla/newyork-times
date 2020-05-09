import './App.css';
import React from 'react';
import './ContentLayout.css'

class ContentLayout extends React.Component {
    constructor() {
        super();
        this.state = {contentType: "zero-state"};
      }
    func = ()=>{
        if(this.props.contentType==="zero-state"){
          return <div>
            <p className="text1">Search for breaking news from across the world, across the times.</p>
            <img alt="zero-state-img" src="zero-state.png" className="image1" style={{marginTop:'549px',marginLeft:'877px'}}></img>
            </div>
        } else{
          return <button>Login</button>
        }
    }
    render(){
        return (
          <div style={{height:"100%",width:"100%"}}>{this.func()}</div>);
    } 
}

export default ContentLayout;