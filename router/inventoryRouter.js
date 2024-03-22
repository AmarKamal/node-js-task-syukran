const express = require('express')
const router = express.Router()
const logger = require('../logger/logger')

// Familiarize with Javascript and NodeJS (Express JS Framework )
// - Task 1: Create a simple API (Method: GET) server which returns name, age, 
// university, hobby in JSON format
// task 1 complete
router.get('/',(req,res) => {
    return res.send({
        name:'amar',
        age:23,
        University:'UiTM',
        hobby:'Badminton'
    })
})

// task 2 integrate winston 
// Familiarize with pm2 (nodejs process monitoring) and integrate Winston for 
// logging purposes
// -Task 2: Write a simple API that returns any JSON value & demonstrate
// logging of different levels (info, warn, error) by triggering errors or logging 
// sample data.
router.get('/list',(req,res) => {
    let data = {
        name:'choc',
        type:'food',
        quantity:'999'}


    logger.info({status:'success' , data:data})
   //logger.error({status:'error', errMsg:'data not found??'})
    return res.send({ status:'success' , data:data })
})

module.exports = router