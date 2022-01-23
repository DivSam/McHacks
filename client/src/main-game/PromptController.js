import Prompt from './Prompt.js'
import NameForm from './input.js'
import React from 'react';
import TypingGameComponent from './PromptColor.js';
import Timer from "./Timer.js";
import "./Timer.css"
import WinScreen from '../win-screen/WinScreen.js';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import "./PromptController.css"
import LoseScreen from '../lose-screen/LoseScreen.js';
export default class PromptController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            won:"in_game",
            time:0
        };
        this.checkWordArray = this.checkWordArray.bind(this);
        this.originalCards = this.props.cards.slice();
        this.setWon = this.setWon.bind(this);
        this.reset = this.reset.bind(this);
        this.incrementTime = this.incrementTime.bind(this);
        this.loseGame = this.loseGame.bind(this);
    }
    componentDidMount()
    {
        this.reset();
    }

    reset()
    {
        this.currCards = this.originalCards.slice();
        this.numWordsLeft = this.currCards.length;
        this.wordDict = new Map();
        this.shuffleArray(this.currCards);
        const interval = setInterval(() => {
            var card = this.currCards.pop();
            this.wordDict.set(card[1], card[0]);
            this.updateWordList('');
            if (this.currCards.length == 0)
            {
                clearInterval(interval);
            }
        }, 2000)
        this.wordComponents = null;
        this.updateWordList('');
    }
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    checkWordArray(word) {
        if (this.wordDict.has(word))
        {
            this.numWordsLeft --;
            this.wordDict.delete(word);
            if (this.numWordsLeft == 0)
            {
                this.state.won = "win";
            }
            this.updateWordList('');
            return word;
        }
        else
        {
            this.updateWordList();
            return null;
        }
    }
    loseGame()
    {
        this.setState(
            {
                won:"loss"
            }
        )
    }
    updateWordList(curr_text)
    {
        //TODO: FIX SPEED CHANGING
        var wordList = [];
        for (var word of this.wordDict) {
            wordList.push(word[1]);
        }
        this.wordComponents = [];
        this.wordDict.forEach((p, a) => this.wordComponents.push(
            <Prompt loseGame={this.loseGame} curr_text={curr_text} key={"prompt" + a} content={p} initX={Math.random() * 1000 + 200} initY={10} xSpeed={0} ySpeed={Math.random() * 400 + 200} className="falling-word" fontsize={Math.random() * 20 + 20}/>
        ))
        
        this.forceUpdate();
    }
    setWon()
    {
        this.setState({
            won:"in_game"
        })
    }

    incrementTime()
    {
        console.log("incrementing time")
        this.setState({
            time:this.state.time + 1
        })
    }
    render()
    {
        if (this.state.won == "win") 
        {
            return (
                <WinScreen reset = {this.reset} setWon = {this.setWon} time = {this.state.time}></WinScreen>
            )
        }
        else if (this.state.won == "loss")
        {
            return (
                <LoseScreen reset = {this.reset} setWon = {this.setWon} time = {this.state.time}></LoseScreen>
            )
        }
        else{
            return (
                <div className="main-body">
                    <Timer incrementTime={this.incrementTime}></Timer>
                    <NameForm checkWordArray = {this.checkWordArray}/>
                     <div>
                        {this.wordComponents}
                    </div> 
                </div>   
                )
        }
        
    }
}

