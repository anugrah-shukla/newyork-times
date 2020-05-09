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
          return <Container fluid className="main-section">
          <Row className="article-section"  top="212px" left="413px" width="1448px" height="534px">
            <Col className="articles"><ArticleTable/></Col>
          </Row>
          <Row className="chart-section">
            <Col className="chart"><Chart/></Col>
          </Row>
      </Container>;
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