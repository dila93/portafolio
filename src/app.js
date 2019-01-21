const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const config = require('../config');
const index = require('./routes/index.routes');

// SETTINGS 
app.set('port', config.port)
// MIDDLEWARES
app.use(morgan('dev', {
    skip: function(req, res) {
        return res.statusCode < 400
    }
}));

app.use(express.json());
// ROUTES
app.use('/', index);
// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));
// STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log("server runing on port ", app.get('port'));
});