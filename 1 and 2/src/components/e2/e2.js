import {Component} from 'react';
import './e2.css'

class ETwo extends Component {
    constructor(props) {
        super(props)
        this.state = {

            Iran: "Tehran",
            Germany: "Berlin",
            Barbados: "Bridgetown",
            Greece:	"Athens",
            Iceland: "Reykjavik",
            India: "New Delhi",
            France:	"Paris",
            Italy: "Rome",
            Japan: "Tokyo",
            Mexico: "Mexico City",
            Netherlands: "Amsterdam",
            Spain: "Madrid",
            Sweden: "Stockholm",
            England: "London",
        }
    }
    render() { 
        return (
            Object.entries(this.state).map(([key, Value]) => {
                return(
                    <>
                    <div className="card">
                        <h2>{key}:</h2>
                        <h4>{Value}</h4>
                    </div>
                    </>
                )
                // Pretty Straightforward - Use Key For The Key And Value For The Value.
                // Just To Clarify: Unlike Object Destructuring, The Parameter Names Don't Matter Here.
            })
        );
    }
}
 
export default ETwo;