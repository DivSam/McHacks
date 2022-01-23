import React, {Component} from 'react'
import Explosion from "react-explode/Babuyan"
export default class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsize:this.props.fontsize,
            value : null,
            pos : (0,0),
            count : 0,
            timeSinceSpawned : 0,
            currentX : 0,
            currentY : 0,
            xSpeed: this.props.xSpeed,
            ySpeed: this.props.ySpeed
        };
        this.spanArray = this.generateSpanArray();
        console.log("HELLo");
        
    }

    updatePos() {
        this.setState(
            {
                currentX:this.state.currentX + this.state.xSpeed/500,
                currentY:this.state.currentY + this.state.ySpeed/500
            },
            () => {
                if (this.state.currentY >= 850)
                {
                    this.props.loseGame();
                }
            }
        )
    }
    componentDidMount() {
        const interval = setInterval(() => {
            this.updatePos();
        }, 1)

        this.setState(
            {
                currentX:this.props.initX,
                currentY:this.props.initY
            }
        )
    }

    setCoordinates(x,y) {
        return `position:absolute;
                left:${x}px;
                top:${y}px;
                `
    }

    generateSpanArray()
    {
        let spanArray = [];
        for (var i = 0; i < this.props.content.length; i++)
        {   
            
            // if (i < this.props.curr_text.length && (this.props.content.charAt(i) != this.props.curr_text.charAt(i)))
            // {
            //     color = "blue";
            // }

            spanArray.push(<span >{this.props.content.charAt(i)}</span>)
        }
        return spanArray;
    }
    render()
    {
        
        return (
            <div className = "letter" style={{fontSize:this.state.fontsize, position:'absolute', left:this.state.currentX, top:this.state.currentY}}>
                {this.spanArray}
            </div>
        )
    }
}