const express = require('express')
const { del } = require('express/lib/application')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router