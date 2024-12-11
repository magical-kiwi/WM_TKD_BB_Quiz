export function resetQuiz() {
    submitButton.disabled = false;
    results.innerHTML = ''
    quiz.innerHTML = '';
    quizData.forEach((currentQuestion, index) => {
        quiz.innerHTML += `
            <div class="question">
                <label><strong>Question ${index + 1}: ${currentQuestion.question}</strong></label><br>
                <label><input type="radio" name="answer${index}" value="a"> ${currentQuestion.a}</label><br>
                <label><input type="radio" name="answer${index}" value="b"> ${currentQuestion.b}</label><br>
                <label><input type="radio" name="answer${index}" value="c"> ${currentQuestion.c}</label>
            </div>
        `;
    });
}

submitButton.addEventListener('click', () => {
    //scoreQuiz()
    let incorrectAnswers = []
    let score = 0;
    quizData.forEach((currentQuestion, index) => {
        const answer = document.querySelector(`input[name="answer${index}"]:checked`);
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
    let percentCorrect = score/quizData.length    
    if(percentCorrect >= 1) encouragement = 'Yay, you got full marks. Well done!';
    else if(percentCorrect >= 0.90) encouragement = 'So close, just a few more tries!';
    else if(percentCorrect >= 0.75) encouragement = 'Almost there, keep at it!';
    else if(percentCorrect >= 0.50) encouragement = 'Half way there, keep practising!';
    else encouragement = 'Keep practising, you get there in no time!';
    results.innerHTML = `<div><label>You scored ${score} out of ${quizData.length}. ${encouragement}</label></div>`;
    if(incorrectAnswers.length >0){
        results.innerHTML+=`<br><div><label>Incorrect Answers:</label><label>`;
        incorrectAnswers.forEach((incorrectAnswer, index) => {
            results.innerHTML+= `<label>${incorrectAnswer}</label><br>`
        });
        results.innerHTML+='</div>';
    }
    
    submitButton.disabled = true;
    resetButton.disabled = false;
});

resetButton.addEventListener('click', () => { resetQuiz()});