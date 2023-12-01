const path = require('path');
const express = require('express');

const app = express();

const userRoute = require('./routes/user');

const sequelize = require('./util/database');

const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoute);

sequelize.sync({force:false})
.then(()=>app.listen(3000,()=>{
    console.log("Server is Running")
}))
.catch(err=>console.log(err))