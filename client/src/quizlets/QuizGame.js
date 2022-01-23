import React, { Component } from 'react';

export default class QuizGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    };
    render(){
        return (
            <div>
            {this.props.words}
            </div>
        )
    };
}