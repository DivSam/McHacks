import Prompt from './Prompt.js'

export default class PromptController extends React.Component {
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
        this.
        this.spanArray = this.generateSpanArray();
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

