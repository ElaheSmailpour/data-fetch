
const express = require('express')
const router = express.Router()

const { getTodos,posttodos} = require("../controller/todocontroller")

router.route('/')
  .get(getTodos)
  .post(posttodos)



module.exports = router