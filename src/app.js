require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');

app.use(express.json());

const adminsRoutes = require('./routes/admin/index.routes');
app.use('/api/admin', adminsRoutes);
app.use('/api/user', adminsRoutes);

app.listen(2604, async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/project')
    // await mongoose.connect(process.env.MONGO_DB_URL)
    
    .then(()=>console.log('DB is Connected'))
    .catch(err => console.log(err.message));
    console.log(`Server is start at http://localhost:2604`);
})