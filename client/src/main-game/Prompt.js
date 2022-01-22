import React, {Component} from 'react'

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
        };
        this.spanArray = this.generateSpanArray();
    }

    updatePos() {
        this.setState(
            {
                currentX:this.state.currentX + this.props.xSpeed/1000,
                currentY:this.state.currentY + this.props.ySpeed/1000
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
        console.log(this.props.content);
        for (var i = 0; i < this.props.content.length; i++)
        {   
            spanArray.push(<span>{this.props.content.charAt(i)}</span>)
        }
        return spanArray;
    }
    render()
    {
        return (
            <div className = "tomato" style={{position:'absolute', left:this.state.currentX, top:this.state.currentY}}>
                {this.spanArray}
            </div>
        )
    }
}