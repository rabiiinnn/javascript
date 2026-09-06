//age to vote for election
// 1. Grab the elements from the HTML file
const form = document.getElementById('votingForm');
const resultMessage = document.getElementById('resultMessage');

// 2. Watch for the submit button click
form.addEventListener('submit', function(event) {
    // Stops the page from refreshing
    event.preventDefault(); 
    
    // 3. Get the value inside the input box
    const age = Number(document.getElementById('userAge').value);

    // 4. Run the check
    if (age >= 18) {
        console.log= alert("Yes, you are eligible for voting!");
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = alert("No, you are not eligible for voting.");
        resultMessage.style.color = "red";
    }
});
