import React, { Component } from 'react';
import Cardsaver from './cardsaver'
import QuizGame from './QuizGame'

export default class QuizGameControl extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards_saved:[],
            option:"cardsaver"
        }
        this.save_cards = this.save_cards.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
    }
    save_cards(cards_saved){
        this.setState({
            cards_saved:cards_saved
        })
    }
    handlePlay(){
        this.setState({
            option:'game'
        })
    }
    render(){
        if (this.state.option === 'cardsaver'){
            return (
                <div>
                    <Cardsaver save_cards = {this.save_cards}></Cardsaver>
                    <div>
                        <button type = 'button' onClick = {this.handlePlay}>Play</button>
                    </div>
                </div>
            )
        }
        else{
            console.log(this.state.cards_saved)
           return  (
               <QuizGame words = {this.state.cards_saved}></QuizGame>
           )
        }
      
    }
}