document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const dropSlots = document.querySelectorAll('.drop-slot');
    const checkButton = document.getElementById('check-answer');
    const nextButton = document.getElementById('next-question');
    const result = document.getElementById('result');
    const questionText = document.querySelector('p strong');

    // Initial question setup
    let currentQuestionIndex = 0;
    const questions = [
        {
            question: "Low Block",
            answer: "Ha Dan Mahk Ki",
            draggables: ["Mahk Ki", "Choong Dan", "Ha Dan", "Cha Ki"],
        },
        {
            question: "High Block",
            answer: "Sang Dan Mahk Ki",
            draggables: ["Chung dan", "Kong Kyuck", "Sang Dan", "Mahk Ki"],
        },
    ];

    function setupQuestion(index) {
        const question = questions[index];
        questionText.textContent = question.question;
        result.textContent = '';
        dropSlots.forEach(slot => {
            slot.textContent = '';
            delete slot.dataset.text;
        });

        // Reset draggable items
        const wordBank = document.getElementById('word-bank');
        wordBank.innerHTML = '';
        question.draggables.forEach(word => {
            const wordBox = document.createElement('div');
            wordBox.className = 'draggable';
            wordBox.draggable = true;
            wordBox.dataset.text = word;
            wordBox.textContent = word;
            wordBank.appendChild(wordBox);

            // Rebind drag event listeners
            wordBox.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text', e.target.dataset.text);
                e.target.classList.add('dragging');
            });

            wordBox.addEventListener('dragend', () => {
                wordBox.classList.remove('dragging');
            });
        });
    }

    // Initialize the first question
    setupQuestion(currentQuestionIndex);

    // Drag and Drop functionality
    dropSlots.forEach(slot => {
        slot.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        slot.addEventListener('drop', (e) => {
            const text = e.dataTransfer.getData('text');
            e.target.textContent = text;
            e.target.dataset.text = text;
        });
    });

    // Check the answer
    checkButton.addEventListener('click', () => {
        const answer = Array.from(dropSlots).map(slot => slot.dataset.text).join(' ');
        if (answer === questions[currentQuestionIndex].answer) {
            result.textContent = 'Correct! Well done!';
            result.style.color = 'green';
            nextButton.style.display = 'inline-block'; // Show the Next Question button
        } else {
            result.textContent = 'Incorrect. Try again!';
            result.style.color = 'red';
        }
    });

    // Set up the next question
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setupQuestion(currentQuestionIndex);
            nextButton.style.display = 'none'; // Hide the Next Question button
        } else {
            result.textContent = 'You completed all questions!';
            nextButton.style.display = 'none';
            checkButton.style.display = 'none';
        }
    });
});