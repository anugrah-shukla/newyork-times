import React from 'react';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContentLayout from './ContentLayout';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeButton:"zero-state",
      searchKeyword:''
    };
  }
  changeButton =(activeButton)=>{
    console.log("inside app.js  change button function: ",activeButton);
    this.setState({activeButton:activeButton});
  }
  setSearchKeyword=(searchKeyword,activeButton)=>{
    console.log("inside app.js set search keyword function: ",searchKeyword);
    this.setState({searchKeyword:searchKeyword,activeButton:activeButton});
  }
  render() {
    return (
      <Container fluid className="MainPage">
    <Row className="top-bar">
      <Col className="logo-bar" md={{span: 3}}><img alt='logo' src='nytimes.png' width="80%"></img></Col>
      <Col className="search-bar" md={{span: 9}}><SearchBar setSearchKeyword={this.setSearchKeyword}/></Col>
    </Row>
    <Row className="bottom-layout">
      <Col className="side-bar-layout"  md={{span: 3}}> <SideBar  changeButton={this.changeButton}/></Col>
      <Col className="content-layout" md={{span: 9}}>
        <ContentLayout contentType={this.state.activeButton} searchkeyword={this.state.searchKeyword}/>
      </Col>
    </Row>
  </Container>
    );
  }
}

export default App;

