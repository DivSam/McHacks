import React, { Component } from 'react';
import "./cardsaver.css"
import { Link } from 'react-router-dom';
import PromptController from '../main-game/PromptController';
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
            const cards_render = cards_saved.map((answer) =>{
                    return (
                        <li key = {answer}>
                            Text: {answer[0]} Answer: {answer[1]}
                        </li>
                    )
                });
        return(
            <div>
                <div className='description'>
                    <h1 className='title'>Add New Words or Import Files!</h1>
                </div>
                <div className='main'>
                    <form onSubmit={this.handleSubmit} className='form'>
                        <input  type="text" value = {this.state.text} onChange={this.handleText}></input>
                        <input type="text" value = {this.state.answer} onChange={this.handleAnswer}></input>
                        <input type = "submit" value = "Submit"/>
                    </form>
                    <div className='theList'>
                        <ol >
                            {cards_render}
                        </ol>
                    </div>
                    <input id = 'files' type = 'file' name = 'file' onChange={this.onFileChange}/>

                    <button type = 'button' onClick = {this.downloadCards}>Download Cards</button>
                    <br></br>
                    <button type = 'button' onClick = {this.handlePlay}>Play</button>
                    <br></br>
                    <Link to="/" className="nav-links">Home</Link>

                </div>
            </div>
        
        )
    }
}