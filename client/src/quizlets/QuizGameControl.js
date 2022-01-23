import React, { Component } from 'react';
import Cardsaver from './cardsaver'
import QuizGame from './QuizGame'
import { Link } from 'react-router-dom';

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