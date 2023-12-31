const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const answers = req.body.answers;
  console.log(answers);

  // TODO: Store answers in your database

  res.status(200).send('Answers received');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));