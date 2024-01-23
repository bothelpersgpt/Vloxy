// Get the element with the id "usernameDisplay"
var usernameDisplay = document.getElementById("usernameDisplay");

// Check if the element exists and if the current text content is "Hello, Robin!"
if (usernameDisplay && usernameDisplay.textContent.trim() === "Hello, Robin!") {
  // Change the text content to "Hello, Owner!"
  usernameDisplay.textContent = "Hello, Owner!";
}
