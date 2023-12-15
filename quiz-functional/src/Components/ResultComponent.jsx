import React from "react";

class Result extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="resultpage">
                <h2>Result</h2>
                <div id="result">
                    <h4>You need more practice!</h4>
                    <p id="score_stat">Your score is 20%</p>
                    <div className="stats">
                        <div id="stat1">
                            <p id="statement">Total number of questions</p>
                            <p id="res">15</p>
                        </div>
                        <div id="stat2">
                            <p id="statement">Number of attempted questions</p>
                            <p id="res">9</p>
                        </div>
                        <div id="stat3">
                            <p id="statement">Number of correct answers</p>
                            <p id="res">3</p>
                        </div>
                        <div id="stat4">
                            <p id="statement">Number of wrong answers</p>
                            <p id="res">6</p>
                        </div>
                    </div>
                </div>
                <button>Play Again</button>
                <button>Back to Home</button>
            </div>
        )
    }
}

export default Result;