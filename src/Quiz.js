import React, {Component} from 'react';
import QuizEnd from './QuizEnd';
import QuizQuestion from './QuizQuestion';


let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            quiz_position:0
        }
    }

    showNextQuestion(){
        this.setState({
            quiz_position : this.state.quiz_position + 1
        });
    }

    handleResetClick(){
        this.setState({
            quiz_position : 0
        });
    }

    
    render(){
        console.log(`length -- ${quizData.quiz_questions.length}`);
        const isQuizEnd = this.state.quiz_position  === quizData.quiz_questions.length;
        console.log(`isQuizEnd -- ${isQuizEnd}`);
        return(
        <div>
            {isQuizEnd ? 
            <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/> :             
            <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position]}/>}
            {/* <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div> */}
        </div>
        );
        
    }

}
export default Quiz;