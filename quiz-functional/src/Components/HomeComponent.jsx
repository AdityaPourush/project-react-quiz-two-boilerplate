import React from 'react';

class Home extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className='page1'>
                <div id='page1'>
                    <h1>Quiz App</h1>
                    <button onClick = {()=>{
                        document.getElementById("quizpage").scrollIntoView()
                    }}>Play</button>
                </div>
            </div>
        )
    }
}

export default Home;