import './App.css';
import React from 'react'

class SearchBar extends React.Component {
    
    validateAndSearch = (id,callback)=>{
      //you can add input validations here
      callback(document.getElementById("keyword").value,"search-results");
    }
    render() {
      console.log("renfering some stuff again!");
      return (
        <form >
        <input className='SearchBox' type="text" placeholder="Search.." id='keyword'/>
        <button className='SubmitButton' onClick = {(e)=>{e.preventDefault();this.validateAndSearch('keyword',this.props.setSearchKeyword)}}> <p style={{color:'#FFFFFF',font:"Roboto"}}>Submit</p></button>
        </form>
      );
    }
}

export default SearchBar;