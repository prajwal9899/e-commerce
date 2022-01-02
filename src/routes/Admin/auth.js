const express = require('express')
const router = express.Router()
const {signup, signin} = require('../../controllers/Admin/auth')
const { validateSignupRequest, isRequestvalidated,validateSigninRequest } = require('../../validators/auth')


router.post('/admin/signin',validateSigninRequest,isRequestvalidated, signin)
router.post('/admin/signup',validateSignupRequest,isRequestvalidated, signup)

module.exports = router