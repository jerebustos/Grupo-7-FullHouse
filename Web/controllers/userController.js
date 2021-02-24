const fs = require('fs');
const path = require('path');

const userFilePath = path.resolve(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));


const controller = {
    login:(req,res)=>{
        res.render("users/login")
    },
    register:(req,res)=>{
        res.render("users/register")
    },
    access: (req,res)=>{

    },
    save: (req,res)=>{

    },
    profile: (req,res)=>{

    },
    edit: (req,res)=>{

    },
    update: (req,res)=>{

    },
    disable: (req,res)=>{

    },
}
    
    
    
    module.exports = controller;