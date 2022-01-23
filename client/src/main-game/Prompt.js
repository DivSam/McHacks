import React, {Component} from 'react'
import Explosion from "react-explode/Babuyan"
export default class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        var color = "green";
        for (var i = 0; i < this.props.content.length; i++)
        {   
            
            // if (i < this.props.curr_text.length && (this.props.content.charAt(i) != this.props.curr_text.charAt(i)))
            // {
            //     color = "blue";
            // }

            spanArray.push(<span style={{color:color}}>{this.props.content.charAt(i)}</span>)
        }
        return spanArray;
    }
    render()
    {
        if (this.props.exploding)
        {
            return (<Explosion size="400" delay={0} repeatDelay={0.1} repeat={5} />         );
        }
        
        return (
            <div className = "tomato" style={{color:"red", position:'absolute', left:this.state.currentX, top:this.state.currentY}}>
                {this.spanArray}
            </div>
        )
    }
}