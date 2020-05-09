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
        return <img alt="zero-state-img" src="zero-state.png" height= "35%" style={{marginTop:'30%',marginLeft:'40%'}}></img>
      } else if(this.props.contentType==="Dashboard"){
        return  <h1>Graph and table here</h1>
      }else if(this.props.contentType==="Articles"){
        return <h1>Articles here</h1>
      }else if(this.props.contentType==="Analytics"){
        return  <h1>Analytics here</h1>
      }else if(this.props.contentType==="Messages"){
        return  <h1>Messages here</h1>
      }else if(this.props.contentType==="Calendar"){
        return <h1>Calendar here</h1>
      }
    }
    render(){
        return (
          <div style={{height:"100%",width:"100%"}}>{this.func()}</div>);
    } 
}

export default ContentLayout;