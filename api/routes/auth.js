const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//REGISTER
router.post("/register", async (req, res)=>{
    try{

        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            profilePicture: req.body.profilePicture,
            coverPicture: req.body.coverPicture,
            isAdmin: req.body.isAdmin,
            desc: req.body.desc,
            city: req.body.city,
            from: req.body.from,
            relationship: req.body.relationship,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//LOGIN
router.post('/login', async(req,res) =>{
    try{
        
        //get user email
        const user = await User.findOne({email: req.body.email});
        //check user email
        !user && res.status(404).json("user not found");
        
        //get user password
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        //check user password
        !validPassword && res.status(400).json("wrong password");

        //if email and password are correct
        res.status(200).json(user);

    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

