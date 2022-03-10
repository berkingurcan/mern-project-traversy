const asyncHandler = require('express-async-handler')

//GET GOALS
//@route GET /api/goals
//@access private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: "Get Goals"
    })
})

//Set GOALS
//@route POST /api/goals
//@access private
const setGoals = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message: "Set Goal"
    })
})

//update GOALS
//@route GET /api/goals/id
//@access private
const updateGoals = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
})

//delete GOALS
//@route GET /api/goals/id
//@access private
const deleteGoals = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}