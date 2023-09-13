const mongoose = require('../db/connection.js');

const peopleSchema = new mongoose.Schema ({
    name: String, 
    image: String,
    title: String,
})

const People = mongoose.model('People', peopleSchema)

module.export = People;