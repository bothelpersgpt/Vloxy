const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Store user credentials (simulating a database)
const userDatabase = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if username is taken
  if (userDatabase.some(user => user.username === username)) {
    res.send('Username is already taken. Please choose another.');
  } else {
    // Store the new user
    userDatabase.push({ username, password });
    res.send('Account created successfully!');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if credentials match
  const user = userDatabase.find(user => user.username === username && user.password === password);

  if (user) {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
