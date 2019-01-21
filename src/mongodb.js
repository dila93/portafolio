const mongoose = require('mongoose');
const config = require('../config');
const URI = config.db;
mongoose.connect(URI, {useNewUrlParser: true})
.then(db => connected())
.catch(err => error_connecting());

function connected(){
	console.log("Main local page in http://localhost:3000/")
	console.log("DB is connected to ", URI);
}

function error_connecting(){
	console.log("=========================================");
	console.error("Failed to connect to mongo server: ", URI);
	console.error("Probably mongod service is not running");
	console.log("Execute in other console one of the following options");
	console.log("> sudo service mongod restart");
	console.log("> sudo mongod");
	console.log("=========================================");
}
module.exports = mongoose;