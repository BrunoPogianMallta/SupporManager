const express = require('express');
const Notebooks = require('../models/Notebooks');
const router = express.Router();
const ULID = require('ulid');


router.post('/register',async (req, res)=>{
    const id = ULID.ulid();
    try {
        const notebooks = await Notebooks.create({id,...req.body});
        return res.status(200).json({notebooks});
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;
