const express = require('express');
const routing = express.Router(); 

// Importing the dummy function from the controller
const { dummy } = require('../controller/dummy.controller.js'); 

// Defining the route
routing.get('/dummy', dummy);

module.exports = routing;
