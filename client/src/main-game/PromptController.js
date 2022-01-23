import Prompt from './Prompt.js'
import NameForm from './input.js'
import React from 'react';
import TypingGameComponent from './PromptColor.js';
export default class PromptController extends React.Component {
    constructor(props) {
        super(props);
        this.checkWordArray = this.checkWordArray.bind(this);
        this.wordDict = new Map();
        for (var i = 0; i < this.props.cards.length; i++)
        {
            this.wordDict.set(this.props.cards[i][1], this.props.cards[i][0]);
        }
        this.wordComponents = null;
        this.updateWordList('');
        console.log(this.props.cards)
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
        // TODO: FIX SPEED CHANGING
        var wordList = [];
        for (var word of this.wordDict) {
            wordList.push(word[1]);
        }
        this.wordComponents = wordList.map((w) => <Prompt curr_text={curr_text} key={"prompt" + w} content={w} initX={Math.random() * 500 + 200} initY={10} xSpeed={0} ySpeed={Math.random() * 200 + 100}/>)
        this.forceUpdate();
    }

    render()
    {

        return (

        <div>
            <NameForm wordx={"potato"} checkWordArray = {this.checkWordArray}/>
            <TypingGameComponent word="carrot"/>
             <div>
                {this.wordComponents}
            </div> 
        </div>   
        )
    }
}

