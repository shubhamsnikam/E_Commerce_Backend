const bodyParser = require('body-parser');
const express = require ('express');
const routesAPI = require('./routes/api');
const { connectDB } = require('./config/db')

const app = express();
// app.get('/',(req,res)=>{
//     res.status(200).send("Hello World")
// })

//Middleware
app.use(express.json());
app.use(bodyParser.json());

// Connection To MongoDB
connectDB();

app.use('/api',routesAPI);



app.listen(5005,()=>{
    console.log('Server started');
})