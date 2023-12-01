 const rootDir = require("../util/path");
 
const Users = require('../models/user');

exports.postAddUser = async (req,res) =>{
    try{
        const user = await Users.create({...req.body});
        res.json(user);
    }
    catch(err){console.log(err)};
}    

exports.getAddUser = async (req,res) =>{
    try{
        const usersList = await Users.findAll();
        res.json(usersList);
    }
    catch(err){console.log(err)};
}
