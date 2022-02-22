const express = require('express');
const User = require('./src/models/Users');

const app = express();

app.use(express.json());


app.post('/create',async (req, res)=>{
    const id = req.body;
    const name = req.body;
    const email = req.body;
    const password = req.body;
    
    try{
        const newUser = await User.create(id,name, email, password,);
        return res.json(newUser);
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }

})

app.listen(3000,()=>{
    console.log('Server is running');
})