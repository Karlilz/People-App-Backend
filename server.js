// require('dotenv').config();
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const peopleController = require('./controllers/peopleController');
// const morgan = require('morgan');


// app.use(morgan('tiny'))
// // req.body will always be empty if we dont include express.urlencoded
// app.use(express.urlencoded({extended: true}));

// app.get('/', (req,res) => {
//   res.send("HELLO WORLD")
// })

// // attach word people to routes 
// app.use('/people', peopleController);

// app.listen(PORT, () => {
//   console.log("HERE GOES NOTHING!");
// });


const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
require('dotenv').config()
const peopleController = require('./controllers/peopleController')
const morgan = require('morgan')

app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.use('/people', peopleController)

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT,() => console.log(`Here were are on ${PORT}`))