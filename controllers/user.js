 //const rootDir = require("../util/path");
 
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

exports.deleteUser =  async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await Users.findByPk(id)
        await user.destroy();
        res.sendStatus(200);
    }
    catch(err){console.log(err)}
}

exports.editUser = async (req,res)=>{
    const id= req.params.id;
    try{
        
    }
    catch(err){console.log(err)}
}
