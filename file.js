// Assuming you have a variable storing the username, let's call it 'username'
var username = "Robin";

// Get the element by its ID
var usernameElement = document.getElementById('usernameDisplay');

// Check if the text content includes the username "Robin"
if (usernameElement.textContent.includes('Hello, ' + username)) {
    // Replace the text content with 'Hello, Owner!'
    usernameElement.textContent = 'Hello, Owner!';

    // You may want to update the username in your backend or wherever it's stored
    // For example, if the user signed up with the username 'Robin', update it to 'Owner'.
    username = "Owner";
}
