import React, {Component} from 'react'

export default class Hidden extends React.Component {
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
        this.speed = props.speed/100;
    }

    updatePos() {
        this.setState(
            {
                currentX:this.state.currentX + this.speed,
                currentY:this.state.currentY + this.speed
            }
        )
    }
    componentDidMount() {
        const interval = setInterval(() => {
            this.updatePos();
        }, 1)
    }
    setCoordinates(x,y) {
        return `position:absolute;
                left:${x}px;
                top:${y}px;
                `
    }
    render()
    {
        console.log(this.state.currentX);
        console.log(this.state.currentY);
        return (
            <div className = "tomato" style={{position:'absolute', left:this.state.currentX, top:this.state.currentY}}>
                {this.props.content}
            </div>
        )
    }
}