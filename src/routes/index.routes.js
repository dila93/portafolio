const express = require('express');
const path = require('path');
const index = express.Router();

index.get('/',function(req, res) {
    res.sendFile(path.join(__dirname+'/../public/index.html'));
});

module.exports = index;