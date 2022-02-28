const express = require('express');
const Company = require('../models/Company');
const router = express.Router();
const ULID = require('ulid')


//cadastrar empresa
router.post('/register', async (req, res) => {
    const id = ULID.ulid();
    const { company_name } = req.body;
    const company = await Company.findAll({
        attribute: ['company_name']

    })
    for (let element of company) {
        if (company_name === element.company_name) {
            console.log('compania já cadastrada')
            return res.status(200).json({ error: 'compania já cadastrada' })
        }
    }

    try {
        const newCompany = await Company.create({ id, company_name });
        return res.status(200).json(newCompany);
    } catch (err) {
        return res.status(500).json({ err })
    }
})

//retorna todas Empresas
router.get('/getAll',async (req,res)=>{
    try {
        const company = await Company.findAll();
        return res.status(200).json({company}); 
    } catch (error) {
        return res.status(500).json({error});
    }
})

//retorna Empresa por Id
router.get('/get/:id', async (req, res) => {
    const id = req.params.id
    try {
        const company = await Company.findByPk(id)
        return res.status(200).json(company)
    } catch (err) {
        return res.status(500).json(err)
    }
})

//deleta empresa por id
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deleteCompany = await Company.destroy({
            where: {
                id: id
            },
            force: true,
        })
        return res.status(200).json({ message: "Company deleted successfully" });
    } catch (err) {
        return res.status(404).json({ message: "Company not found" })
    }

})

//atualizar empresa
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const updateCompany = await Company.update({
            company_name: req.body.name,
        },
            {
                returning: true, where: { id: req.params.id }

            })
        return res.status(200).json({ message: "Company updated successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something gone wrong!" })
    }
})



module.exports = router;