import './App.css';
import React from 'react'


class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {activeButton:"Dashboard"};
    }
    
    render() {
      return (
        <div>
            <button className='SideBarTitles' onClick= {()=>this.props.changeButton('Dashboard')} >Dashboard </button>
            <button className='SideBarTitles' onClick= {()=>this.props.changeButton('Articles')}>Articles</button>
            <button className='SideBarTitles' onClick= {()=>this.props.changeButton('Analytics')}>Analytics</button>
            <button className='SideBarTitles' onClick= {()=>this.props.changeButton('Messages')}>Messages</button>
            <button className='SideBarTitles' onClick= {()=>this.props.changeButton('Calendar')}>Calendar</button>
        </div>
      );
    }
}

export default SideBar;