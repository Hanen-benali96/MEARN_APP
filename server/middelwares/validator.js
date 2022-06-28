const {body, validationResult }=require ('express-validator')
const registerRules=()=>[
body('name','Name is required!').notEmpty(),
body('email','enter a valid email').isEmail(),
body('password', 'password must be at least 6 chararcteres ').isLength({min:6}),
body('address1', 'address is required ').notEmpty(),
body('address2', 'address is required ').notEmpty(),
body('zipCode', 'zipCode is required ').notEmpty(),
body('phone', 'phone is required ').notEmpty(),
body('country', 'country is required ').notEmpty()
]
const loginRules=()=>[
    body('email','enter a valid email').isEmail(),
body('password', 'password is required ').notEmpty(),

]
const validator=(req,res,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    next()
}


module.exports={registerRules,validator,loginRules}