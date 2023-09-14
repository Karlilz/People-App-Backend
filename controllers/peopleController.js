// const express = require ('express')
// const People = require('../models/People');
// const router = express.Router()

// // INDUCES
// // WE WANT => INDEX, DELETE, UPDATE, CREATE, SHOW

// // INDEX ROUTE
// router.get('/', async (req, res) => {
//     try {
//     res.json(await People.find())
//     } catch (error) {
//         res.status(400).json(error);
//     }
// })

// // CRTEATE ROUTE
// router.post('/', async (req, res) => {
//     // try and catch is used to catch errors in our code. will try to do some code(that may throw an error).
// try {
//     res.json(await People.create(req.body));
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// // DELETE ROUTE
// // Do not need to download methodoverride because
// router.delete('/:id', async (req, res) => {
//     try {
//         res.json(await People.findByIdAndDelete(req.params.id));
//     } catch (error) {
//         res.status(400).json(error);
//     }
// })

// // UPDATE ROUTE
// router.put('/:id', async (req, res) => {
//     try {
//     res.json(
//         // new true will give us the new updated body 
//         await People.findByIdAndUpdate(req.params.id, req.body, {new: true}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// // SHOW ROUTE
// router.get('/:id', async (req, res) => {
//     try {
//         res.json(await People.findById(req.params.id));
//         } catch (error) {
//             res.status(400).json(error)
//         }
// })

// module.exports = router;


const express = require('express')
const router = express.Router()
const People = require('../models/People')

// Index
router.get('/', async (req, res) => {
    try {
        res.json(await People.find())
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create
router.post('/', async (req, res) => {
    try {
        res.json(await People.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Show
router.get('/:id', async (req, res) => {
    try {
        res.json(await People.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Destroy
router.delete('/:id', async (req, res) => {
    try {
        res.json(await People.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update
router.put('/:id', async (req, res) => {
    try {
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new :true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router