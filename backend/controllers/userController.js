const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//Register User
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check user
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('User already exist')
    }

    //password encrtypd
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }
})

//Auth User
//api/users/login
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login User'})
})

//Get Userdata
//api/users/me
const getUser = asyncHandler(async (req, res) => {
    res.json({message: 'Get User'})
})

module.exports = {
    registerUser,
    loginUser,
    getUser
}