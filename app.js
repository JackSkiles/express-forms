const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening. Open http://localhost:${PORT} to view.`);
});
