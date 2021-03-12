const express = require('express');
const router = require('express').Router();
const client = require('../models/index');// FLAG
const addPage = require('../views/addPage'); //

router.use((req,res,next) =>{
  next()
})

router.get('/', (req, res, next) => {
  res.send('retrieves all wiki pages')

})

router.post('/', (req, res, next) => {
  res.send('submits a new page to the db')

})

//send the form from addPage
router.get('/add', (req, res, next) => {
  console.log('is this working?');
  res.send(addPage())

})


module.exports = router;
