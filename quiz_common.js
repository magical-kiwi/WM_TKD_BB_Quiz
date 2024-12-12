export class Quiz {
    constructor(document, title, questions = []) {
        this.quizData = questions;
        this.quizElements = this.#getQuizElements(document);
        this.title = title
        this.#initQuiz();
    }

    #getQuizElements(doc) {
        return {
            document: doc,
            title: doc.getElementById("title"),
            quiz: doc.getElementById("quiz"),
            submitButton: doc.getElementById("submit"),
            resetButton: doc.getElementById("reset"),
            results: doc.getElementById("results"),
        };
    }

    #initQuiz() {
        this.quizElements.title.innerHTML = this.title
        this.quizElements.submitButton.addEventListener('click', () => {
            this.submitQuiz()
        });
    
        this.quizElements.resetButton.addEventListener('click', () => { this.resetQuiz()});
        this.resetQuiz();
    }

    resetQuiz() {
        this.quizElements.submitButton.disabled = false;
        this.quizElements.results.innerHTML = ''
        this.quizElements.quiz.innerHTML = '';
        this.quizData.forEach((currentQuestion, index) => {
            this.quizElements.quiz.innerHTML += `
                <div class="question">
                    <label><strong>Question ${index + 1}: ${currentQuestion.question}</strong></label><br>
                    <label><input type="radio" name="answer${index}" value="a"> ${currentQuestion.a}</label><br>
                    <label><input type="radio" name="answer${index}" value="b"> ${currentQuestion.b}</label><br>
                    <label><input type="radio" name="answer${index}" value="c"> ${currentQuestion.c}</label>
                </div>
            `;
        });
}

    resetQuiz() {
        let quizElements = this.quizElements;

        quizElements.submitButton.disabled = false;
        quizElements.resetButton.disabled = true;
        quizElements.results.innerHTML = ''
        quizElements.quiz.innerHTML = '';
        this.quizData.forEach((currentQuestion, index) => {
            quizElements.quiz.innerHTML += `
                <div class="question">
                    <label><strong>Question ${index + 1}: ${currentQuestion.question}</strong></label><br>
                    <label><input type="radio" name="answer${index}" value="a"> ${currentQuestion.a}</label><br>
                    <label><input type="radio" name="answer${index}" value="b"> ${currentQuestion.b}</label><br>
                    <label><input type="radio" name="answer${index}" value="c"> ${currentQuestion.c}</label>
                </div>
            `;
        });
    }

    submitQuiz()
    {
        let incorrectAnswers = []
        let score = 0;
        this.quizData.forEach((currentQuestion, index) => {
            const answer = this.quizElements.document.querySelector(`input[name="answer${index}"]:checked`);
            if (answer) { 
                if(answer.value === currentQuestion.correct) {
                    score++;
                }
                else{
                incorrectAnswers.push(`<strong>Question ${index + 1}:</strong> Your Answer: <u>${currentQuestion[answer.value]}</u>. Correct answer: <u>${currentQuestion[currentQuestion.correct]}</u>`) 
                }
            }
            else{
                incorrectAnswers.push(`<strong>Question ${index + 1}:</strong> Your Answer: <u>None</u>. Correct answer: <u>${currentQuestion[currentQuestion.correct]}</u>`)
            }
        });
        let encouragement = ''
        let percentCorrect = score/this.quizData.length;
        if(percentCorrect >= 1) encouragement = 'Yay, you got full marks. Well done!';
        else if(percentCorrect >= 0.90) encouragement = 'So close, just a few more tries!';
        else if(percentCorrect >= 0.75) encouragement = 'Almost there, keep at it!';
        else if(percentCorrect >= 0.50) encouragement = 'Half way there, keep practising!';
        else encouragement = 'Keep practising, you get there in no time!';
        this.quizElements.results.innerHTML = `<div><label>You scored ${score} out of ${this.quizData.length}. ${encouragement}</label></div>`;
        if(incorrectAnswers.length >0){
            this.quizElements.results.innerHTML+=`<br><div><label>Incorrect Answers:</label><label>`;
            incorrectAnswers.forEach((incorrectAnswer, index) => {
                this.quizElements.results.innerHTML+= `<label>${incorrectAnswer}</label><br>`
            });
            this.quizElements.results.innerHTML+='</div>';
        }
        
        this.quizElements.submitButton.disabled = true;
        this.quizElements.resetButton.disabled = false;
    }
}