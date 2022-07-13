import {Component} from 'react';
class EOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
        }
    }

    IncreaseFunc(){
        this.setState({result: this.state.result+1});
    }

    DecreaseFunc(){
        this.setState({result: this.state.result-1});

    }

    render() {
        return (
            <div className="wrapper">
            <h2 id="result" style={{marginLeft: "3rem"}}>Number: {this.state.result}</h2>
            <button onClick={() => this.IncreaseFunc(this.state.result)} style={{margin: "1rem"}}>Increment</button>
            <button onClick={() => this.DecreaseFunc(this.state.result)} style={{margin: "1rem"}}>Decrement</button>
        </div>
        );
    }
}

export default EOne;