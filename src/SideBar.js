import './App.css';
import React from 'react'
import ContentLayout from './ContentLayout'

class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {activeButton:"Dashboard"};
    }
    func = ()=>{
      console.log("func called in side bar");
         this.props.changeButton("Dashboard");
    }   
    render() {
      return (
        <div>
            <button className='SideBarTitles' onClick= {this.func} >Dashboard </button>
            <button className='SideBarTitles'>Articles</button>
            <button className='SideBarTitles'>Analytics</button>
            <button className='SideBarTitles'>Messages</button>
            <button className='SideBarTitles'>Calendar</button>
        </div>
      );
    }
}

export default SideBar;