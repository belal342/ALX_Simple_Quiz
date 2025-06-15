function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selectedRadio.value;
    
    // Compare the answers and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);