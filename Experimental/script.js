correct = false;

document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const dropSlots = document.querySelectorAll('.drop-slot');
    const checkButton = document.getElementById('check-answer');
    const result = document.getElementById('result');

    // Drag and Drop functionality
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.dataset.text);
            e.target.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

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
        if(correct === true)
        {
            window.location.href = 'Q2.html'
            return;
        }
        const answer = Array.from(dropSlots).map(slot => slot.dataset.text).join(' ');
        if (answer === 'Ha dan Mahk ki') {
            result.textContent = 'Correct! Well done!';
            result.style.color = 'green';
            checkButton.textContent = "Next Question."
            correct = true;
        } else {
            result.textContent = 'Incorrect. Try again!';
            result.style.color = 'red';
        }
    });
});