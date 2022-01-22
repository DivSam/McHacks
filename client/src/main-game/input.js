import React, { Component, createContext } from 'react';

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
        <form>
            Current Word:
            <textarea type="text" value={this.state.value} onChange={this.onChanges} />        
        </form>
      );
    }
  }