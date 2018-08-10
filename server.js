const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app)

app.listen(8000, function() {
    console.log('The World is Listening on port 8000');
})