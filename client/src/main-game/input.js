import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
/*
export default class MyInput extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text:''
        };
    }
    validateword(word) {
        return (word === 'potato') ? '' : word
        
    }
    handleChange(event){
        this.setState({text: word === 'potato'? '' :this.state.text})
    }
    render() {
        return (
        <form>
        <textarea></textarea>
        </form>
        )
    }
}*/
export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value === this.props.wordx ? '' : event.target.value});  }
  
    render() {
      return (
          <div>
              <form>
            Current Word:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} />        
        </form>

        <Link to="/">Home</Link>
          </div>
        
        
      );
    }
  }