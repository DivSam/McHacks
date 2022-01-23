import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import "./input.css"

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.onChanges = this.onChanges.bind(this);
    }
    
    onChanges(event){
        var word_to_del = this.props.checkWordArray(event.target.value);

        if (word_to_del)
        {
            this.setState({value:''});
        }
        else
        {
            this.setState({value:event.target.value});
        }
    }
    render() {
      return (
        <div>
        <div className='something' class="form__group">
              <form className='current'>
            <textarea id="answer" class="form__field" placeholder="Write Answers Here" type="text" value={this.state.value} onChange={this.onChanges} /> 
        </form>
        </div>
        </div>
        
        
      );
    }
  }