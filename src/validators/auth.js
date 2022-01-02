const {check, validationResult} = require('express-validator')

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstname is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('lastName'),
    check('email')
    .notEmpty()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 characters long'),
]

exports.validateSigninRequest = [
    check('email')
    .notEmpty()
    .withMessage(' email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('you entered wrong password'),
]


exports.isRequestvalidated = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({error : errors.array()[0].msg})
    }

    next();
}
