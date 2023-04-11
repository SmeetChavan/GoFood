require('dotenv').config();

const allRoutes = require('./routes/allRoutes');

const mongoose = require('mongoose');

const express = require('express')

const app = express();

app.use((req , res , next) => {
    console.log(req.path , req.method);
    next();
});

app.use(express.json());

app.use("/" , allRoutes);

mongoose.connect(process.env.MongoURI)
.then(()=>{console.log("Connected to database ... ")})
.catch((error) => {console.log(error)});


app.listen(process.env.PORT , ()=>{
    console.log("Listening on port 4000 ....");
})