import Prompt from './Prompt.js'
import NameForm from './input.js'
import React from 'react';
import TypingGameComponent from './PromptColor.js';
import Timer from "./Timer.js";
import "./Timer.css"
import WinScreen from '../win-screen/WinScreen.js';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
export default class PromptController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            won:false
        };
        this.checkWordArray = this.checkWordArray.bind(this);
        this.wordDict = new Map();
        console.log(this.props.cards);
        this.shuffleArray(this.props.cards);
        const interval = setInterval(() => {
            var card = this.props.cards.pop();
            this.wordDict.set(card[1], card[0]);
            this.updateWordList('');
            if (this.props.cards.length == 0)
            {
                clearInterval(interval);
            }
        }, 3000)
        this.wordComponents = null;
        this.updateWordList('');
        this.setWon.bind(this);
        console.log(this.props.cards)
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
            this.wordDict.delete(word);
            this.updateWordList('');
            return word;
        }
        else
        {
            this.updateWordList();
            return null;
        }
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
            <Prompt exploding={false} curr_text={curr_text} key={"prompt" + a} content={p} initX={Math.random() * 1000 + 200} initY={10} xSpeed={0} ySpeed={Math.random() * 200 + 100}/>
        ))
        if (wordList.length == 0)
        {
            this.state.won = true;
        }
        
        this.forceUpdate();
    }
    setWon(bool)
    {
        this.state.won=bool;
    }
    render()
    {
        if (this.state.won) 
        {
            return (
                <WinScreen setWon = {this.setWon}></WinScreen>
            )
        }
        else{
            return (
                <div>
                    <Timer></Timer>
                    <NameForm checkWordArray = {this.checkWordArray}/>
                     <div>
                        {this.wordComponents}
                    </div> 
                </div>   
                )
        }
        
    }
}

