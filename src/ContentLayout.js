import './App.css';
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ArticleTable from './ArticleTable.jsx';
import Chart from './ArticleChart.jsx';

class ContentLayout extends React.Component {
    constructor() {
        super();
        this.state = {contentType: "Dashboard"};
      }
    func = ()=>{
        if(this.props.contentType==="Dashboard"){
          return <img alt="zero-state-img" src="zero-state.png" height= "35%" style={{marginTop:'30%',marginLeft:'40%'}}></img>
        } else if(this.props.contentType==="Articles"){
          return <div style={{height:'100%'}}><div style={{height:'40%'}}><ArticleTable/></div> <div style={{height:'45%',marginTop:'4%'}}><ArticleTable/></div></div>
        }else if(this.props.contentType==="Analytics"){
          return  <h4>Articles here</h4>;
        }else if(this.props.contentType==="Messages"){
          return  <h4>Messages here</h4>
        }else if(this.props.contentType==="Calendar"){
          return <h4>Calendar here</h4>
        }
    }
    render(){
        return (
          <div style={{height:"100%",width:"100%"}}>{this.func()}</div>);
    } 
}

export default ContentLayout;