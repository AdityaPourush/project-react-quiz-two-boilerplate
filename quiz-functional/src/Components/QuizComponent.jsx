import { useState } from "react";
import quizData from "../resources/quizQuestion.json";
// console.log('quizData :', quizData);

const Quiz = () => {

    let len = quizData.length;
    // console.log('len :', len);

    const [QNo, setQNo] = useState(0);

    const PrevQNo = () => {
        QNo == 0 ? setQNo(QNo + (len - 1)) : setQNo(QNo - 1)
    }

    const NextQNo = () => {
        QNo == 14 ? setQNo(QNo - (len - 1)) : setQNo(QNo + 1)
    }

    const quit = () => {
        alert("Are you sure you want to quit ?")
    }

    let { question, optionA, optionB, optionC, optionD,} = quizData[QNo];
    // console.log('question :', question);
    // console.log('answer :', answer);

    return (
        <div className="quizpage" id="quizpage">
            <div id="quiz">
                <h2>Question</h2>
                <p id="q_no">{QNo + 1} of 15</p>
                <p id="question">{question}</p>
                <div className="options">
                    <button>{optionA}</button>
                    <button>{optionB}</button>
                    <button>{optionC}</button>
                    <button>{optionD}</button>
                </div>
                <div id="what">
                    <button id="prev_button" onClick={PrevQNo}>Previous</button>
                    <button id="nxt_button" onClick={NextQNo}>Next</button>
                    <button id="quit_button" onClick={quit}>Quit</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz;