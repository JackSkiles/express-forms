const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

const contactRouter = require('./routes/contact');

app.use('/contact', contactRouter);

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening. Open http://localhost:${PORT} to view.`);
});
