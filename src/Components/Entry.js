import React, {Component} from 'react';
// import axios from 'axios'

// import { render } from "@testing-library/react"
// import Titles from "./Titles" ---- is the child not the parent

class Entry extends Component{
    constructor(props){
        super(props)
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);            
    }
    handleChange(event){
        this.setState({value: event.target.value});
        // <App titleEntry={this.state.value}/> 
        
    }

    handleSubmit(event){
        alert("you added the title:" + this.state.value);
        // event.preventDefault();
    }


render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
// console.log(this.state.value)
}
export default Entry