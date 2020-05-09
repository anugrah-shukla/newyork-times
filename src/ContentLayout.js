import './App.css';
import React from 'react'
class ContentLayout extends React.Component {
    constructor() {
        super();
        this.state = {contentType: "zero-state"};
      }
    func = ()=>{
        if(this.props.contentType==="zero-state"){
          return <img alt="zero-state-img" src="zero-state.png" height= "35%" style={{marginTop:'30%',marginLeft:'40%'}}></img>
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