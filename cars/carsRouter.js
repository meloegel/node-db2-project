const express = require('express')

const db = require('../data/connection')

const router = express.Router();

router.get('/', (req, res) => {
    db('car-dealer')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('car-dealer').where({ id }).first()
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

router.post('/', (req, res) => {
    const carData = req.body
    db('car-dealer').insert(carData)
        .then(ids => {
            db('car-dealer').where({ id: ids[0] })
                .then(newCar => {
                    res.status(201).json(newCar)
                })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

module.exports = router;