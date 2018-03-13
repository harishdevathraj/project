var mongoose = require('mongoose'); // Import Mongoose Package
var Schema = mongoose.Schema; // Assign Mongoose Schema function to variable
var titlize = require('mongoose-title-case'); // Import Mongoose Title Case Plugin
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin

var projectschema= new Schema({
	//username: {type: String},
	project: {type: String},
	description: {type: String},
	filename: {type: String},
	material: {type: String},
	process: {type: String},
	email: {type: String}
	

});


module.exports = mongoose.model('Project', projectschema); // Export project Model for use in API
