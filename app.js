const express = require('express');
const app = express();
const port = 3000;

// Redirect from /message to /signup
app.get('/message', (req, res) => {
  res.redirect('/signup');
});

// Serve signup.html
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
