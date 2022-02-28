const express = require('express');
const Collaborators = require('../models/Collaborators');
const router = express.Router();
const ULID = require('ulid')
const validate = require('../validators');
const { user } = require('pg/lib/defaults');

    //cadastrar colaborador
    router.post('/register', async(req,res)=>{
        const id = ULID.ulid();
    let {
        user_name,
        last_name,
        phone_number,
        email,
        address,
        company,
        has_notebook
    }= req.body;
    const validateCollab = validate.validateCollaborator(user_name,last_name,email,address);
    const validatePhoneNumber = validate.validatePhoneNumber(phone_number);
    const validateEmailCollab = validate.validateEmail(email);
    const {error} = validateCollab;

    if(!validateEmailCollab){
        return res.json({error:'email must have the format user@provider'})
    }

    if(!validatePhoneNumber) return res.json({error:'must be a valid phone number'});

    if(error) return res.json({error})
    
    try{
        const newCollaborator = await Collaborators.create({
            id,user_name,last_name,phone_number,email,address,company,has_notebook
        })
        return res.status(200).json(newCollaborator)
    }catch(err){
        return res.status(500).json({err})
    }
})

//retorna todos colaboradores
router.get('/getall/:id',async (req,res)=>{
    const id = req.params.id
    try{
        const getAll = await Collaborators.findByPk(id)
        return res.status(200).json(getAll)
    }catch(err){
        return res.status(500).json(err)
    }
    

})

//deleta colaborador
router.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id
    try{
        
    const deleteCollaborator  = await Collaborators.destroy({
        where:{
            id:id
        },
        force: true,
    })
        return res.status(200).json({message:"Deleted successfully"});          
}catch(err){
    return res.status(404).json({message:"record not found"})
}  
            
})

//atualizar colaborador
router.put('/update/:id',async(req, res)=>{
    try {
        const id = req.params.id;
        
        const updatedCollaborator = await Collaborators.update({
        name:req.body.name,
        lastName:req.body.las_name,
        phoneNumber:req.body.phone_number,
        email:req.body.email,
        address:req.body.address,
        company:req.body.company,
        hasNotebook:req.body.has_notebook
        },
        {returning:true,where:{id:req.params.id}
        
        })
        return res.status(200).json({message: "Collaborator updated successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something gone wrong!"})
    }
})



module.exports = router;