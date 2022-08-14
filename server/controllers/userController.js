const Users = require('../models/userModel');

const userController = {
    register: async (req, res) => {
        const {name, email, password} = req.body;

        const user = await Users.findOne({email});

        if(user) return res.status(400).json({msg: "User already exists"});


    }
}

module.exports = userController;