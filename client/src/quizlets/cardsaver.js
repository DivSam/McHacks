import React, { Component } from 'react';

export default class Cardsaver extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards_saved:[["asdads", "as"]],
            text:'',
            answer:''
        };
        this.handleText = this.handleText.bind(this)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleText(event){
        this.setState({
            cards_saved:this.state.cards_saved,
            text:event.target.value,
            answer:this.state.answer
        })
    }
    handleAnswer(event){
        this.setState({
            cards_saved:this.state.cards_saved,
            text:this.state.text,
            answer:event.target.value
        })
    }
    handleSubmit(event){
        console.log(this.state.text)
        console.log(this.state.answer)
        
        this.setState({
            cards_saved:this.state.cards_saved.concat([[this.state.text, this.state.answer]]),
            text:this.state.text,
            answer:this.state.answer
            })
        console.log(this.state.cards_saved)
        event.preventDefault();
    }
    render(){
            const cards_saved = this.state.cards_saved
            const cards_render = cards_saved.map((answer) =>{
                    return (
                        <li key = {answer}>
                            Text: {answer[0]} Answer: {answer[1]}
                        </li>
                    )
                });
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input  type="text" value = {this.state.text} onChange={this.handleText}></input>
                <input type="text" value = {this.state.answer} onChange={this.handleAnswer}></input>
                <input type = "submit" value = "Submit"/>
            </form>
            <div>
                <ol>
                    {cards_render}
                </ol>
            </div>
        </div>
        )
    }
}