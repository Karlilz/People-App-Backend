const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const peopleController = require('./controllers/peopleController');
const morgan = require('morgan');
const cors= require ('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use('/people', peopleController);

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT,() => console.log(`Here were are on ${PORT}`))

// when we want to use JSON, we need to tell our app to use JSON 