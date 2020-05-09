import './App.css';
import React from 'react'
class SearchBar extends React.Component {
    render() {
      return (
        <form >
        <input className='SearchBox' type="text" placeholder="Search.."/>
        <button className='SubmitButton'> <p style={{color:'#FFFFFF',font:"Roboto"}}>Submit</p></button>
        </form>
      );
    }
}

export default SearchBar;