import React, { Component } from 'react';
import "./cardsaver.css"
import { Link } from 'react-router-dom';
import PromptController from '../main-game/PromptController';
import Navbar from '../home-page/Navbar';
export default class Cardsaver extends Component{

    constructor(props){
        super(props)
        this.state = {
            cards_saved:[],
            text:'',
            answer:'',
            selectedfile: null,
            filereader:null,
            inGame:false
        };

        this.handleText = this.handleText.bind(this)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
        this.downloadCards = this.downloadCards.bind(this)
        this.handleFileRead = this.handleFileRead.bind(this)
        this.onFileChange = this.onFileChange.bind(this)
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
        
        this.setState({
            cards_saved:this.state.cards_saved.concat([[this.state.text, this.state.answer]]),
            text:'',
            answer:''
            })

        /*this.props.save_cards(this.state.cards_saved)*/
        event.preventDefault();
    }
    downloadCards(){
        const fileData = JSON.stringify(this.state.cards_saved);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'filename.json';
        link.href = url;
        link.click();

    }
    handleFileRead(){
        const content = JSON.parse(this.state.filereader.result)
        this.setState({
            cards_saved:content
        })
    }
    onFileChange(event){
        let newfilereader = new FileReader()
        
        newfilereader.onloadend = this.handleFileRead
        let blob = new Blob(event.target.files)
        newfilereader.readAsText(blob)
        this.setState({
            filereader:newfilereader
        })
        
        event.preventDefault();


    }
    handlePlay()
    {
        this.setState(
            {inGame:true}
        )
        console.log(this.state.cards_saved);
    }
    render(){
        if (this.state.inGame)
        {
            return <PromptController initWords={["hey", "jude"]} cards={this.state.cards_saved}/>
        }
            const cards_saved = this.state.cards_saved
            const questions_render = []
            const answers_render = []
            const other_render = []
            for (const answer of cards_saved.slice(0, 5))
            {
                questions_render.push(<li key = {answer[0]}>
                    QUESTION: {answer[0]}
                </li>)
                answers_render.push(<li key = {answer[1]}>
                    ANSWER: {answer[1]}
                </li>)
            }

            if (cards_saved.length > 5)
            {
                other_render.push(<div>And {cards_saved.length - 5} more</div>)
            }
            if (cards_saved.length === 0 )
            {
                other_render.push(<div>You have no questions and answers yet</div>)
            }
        return(
            <div>
                <div className="nav-bar">
                <Navbar/>
                </div>
                <div className='description'>
                    <h1 className='title'>Add New Questions and Answers by Typing Them or Uploading a File in JSON Format</h1>
                </div>
                <div class="form__group" className='main'>
                    <form onSubmit={this.handleSubmit} className='form'>
                        <input class="form__field" placeholder="Enter a question here" type="text" value = {this.state.text} onChange={this.handleText}></input>
                        <input class="form__field" placeholder="Enter the corresponding answer here" type="text" value = {this.state.answer} onChange={this.handleAnswer}></input>
                        <input class="button-45" type = "submit" value = "Submit"/>
                    </form>
                    <br/>
                    <div>
                    <div class="theList">Current questions and answers:</div>
                    <br/>
                    <div style={{display:"inline-block", width:"50%",margin:"auto"}}>
                    <ul class="tableA">
                    <div style={{textAlign:"left"}}>{questions_render}</div>
                    </ul>
                    <ul class="tableB">
                    <div style={{textAlign:"right"}}>{answers_render}</div>
                    </ul>
                    </div>
                    {other_render}
                    <br/>
                    </div>

                    <input  class="hide_file" id = 'files' type = 'file' name = 'file' onChange={this.onFileChange}/>
                    <button class="button-45" type = 'button' onClick = {this.downloadCards}>Download Cards</button>
                    <br></br>
                    <button class="button-45" type = 'button' onClick = {this.handlePlay}>Play</button>
                    <br></br>

                </div>
            </div>
        
        )
    }
}