const res = require("express/lib/response");
const User = require('../models/Users')

//verifica se o e-mail é válido
exports.validateEmail = (email) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//verifica input do cadastro do User
exports.validateUser = (user_name,email,password) => {
  if (!user_name) {
    return { error: 'username is required' };
  }
  if (user_name.length < 5) {
    return { error: "username length must be greater than 5" };
  }
    if (!email) {
    return { error: 'email is required!' };
  }
    if (!password) {
    return { error: 'password is required!' };
  }
  if (password.length < 5) {
    return { error: "password length must be greater than 5" };
  }
  
  return {user_name,email,password};
  
}
//verifica numerdo do telefone do model  'register' Collaborator
exports.validatePhoneNumber = (inputtxt) =>{
  let phoneno = /^\d{11}$/;
  if(inputtxt.match(phoneno)){
      return true;
        }
      else
        {
        return false;
        }
}

exports.validateCollaborator = (user_name,last_name,email,address)=>{
  if (!user_name) {
    return { error: 'username is required' };
  }
  if (!last_name) {
    return { error: 'last name is required' };
  }
  if (user_name.length < 5) {
    return { error: "username length must be greater than 5" };
  }
    if (!email) {
    return { error: 'email is required!' };
  }
   
  if(!address){
    return {error: 'address is required!'};
  }
  
  return {user_name,last_name,email,address};
}

exports.companyValidator =(company_name,current)=>{
  if(company_name === current){
    return ({error:'Company already registered'})
  }
  return (company_name)
}



  

  
  


  
