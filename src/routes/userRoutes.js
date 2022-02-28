const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/Users');
const validate = require('../validators')
const ULID = require('ulid');
const { json } = require('body-parser');



const router = express.Router();

//cadastrar usuario
router.post('/register',async (req, res)=>{
  let {user_name,email,password} = req.body;

  const val =validate.validateUser(user_name,email,password);
  const {error} =val;

  const id = ULID.ulid();
  const currentId = id;
  
  const user = await User.findAll({
    attributes:['user_name','email']
  })

  let objUser = [];
  let objEmail = [];
  
  for(let element of user){
    objUser.push(user[element])
    objEmail.push(user[element])
  }
  

  objEmail.forEach((element)=>{
  console.log('element email',element)
  if(element === email){
    return ({error:'email já cadastrado'})
  }
})
  // if(req.body.user_name === user_name){
  //   return res.json({error:'User already taken'})
  // }
  if(error) return res.json({error});

   if(!validate.validateEmail(email)){
     return res.json({error:'must be a valid email'})
   }
    try {
      
      password = await bcrypt.hash(password, 10);

      await User.create({
      id,currentId,user_name, email, password
      });

      return res.status(200).json(`created successfully!`);
      
      }catch(err){
          console.log(err)
          return res.status(500).json(err)
      }
  
  })

  //logar usuario
  router.post('/login',async(req,res)=>{
    
  })



  
  module.exports = router;