import Prompt from './Prompt.js'
import NameForm from './input.js'
import React from 'react';
import TypingGameComponent from './PromptColor.js';
export default class PromptController extends React.Component {
    constructor(props) {
        super(props);
        this.checkWordArray = this.checkWordArray.bind(this);
        this.wordDict = new Map();
        console.log(this.props.cards);
        this.shuffleArray(this.props.cards);
        // for (var i = 0; i < this.props.cards.length; i++)
        // {
        //     this.wordDict.set(this.props.cards[i][1], this.props.cards[i][0]);
        // }
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
        // TODO: FIX SPEED CHANGING
        var wordList = [];
        for (var word of this.wordDict) {
            wordList.push(word[1]);
        }
        this.wordComponents = [];
        this.wordDict.forEach((p, a) => this.wordComponents.push(
            <Prompt exploding={false} curr_text={curr_text} key={"prompt" + a} content={p} initX={Math.random() * 1000 + 200} initY={10} xSpeed={0} ySpeed={Math.random() * 200 + 100}/>
        ))

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

