const express = require('express');
const User = require('./models/Users');
const Collaborators = require('./models/Collaborators');
const Company = require('./models/Company');
const Notebooks = require('./models/Notebooks')

const userRoutes = require('./routes/userRoutes');
const collaboratorRoutes = require('./routes/collaboratorRoute')
const companyRoutes = require('./routes/companyRoutes');
const notebooksRoutes = require('./routes/notebooksRoutes');

const app = express();


app.use(express.json());
app.use('/users',userRoutes);
app.use('/collaborator',collaboratorRoutes);
app.use('/company',companyRoutes);
app.use('/notebooks',notebooksRoutes);



app.listen(3000,()=>{
    console.log('Server is running');
})