const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'This is my Website',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: "Contact Me. Please. I'm lonely.",
    submitted: false,
  });
});

app.post('/contact', (req, res) => {
  res.render('contact', {
    title: 'Thank You',
    submitted: true,
  });
});

app.listen(PORT, () => {
  console.log(`Listening. Open http://localhost:${PORT} to view.`);
});
