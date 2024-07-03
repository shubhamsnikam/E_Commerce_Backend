const mongoose = require('mongoose');

async function connectDB(){
 try{
await mongoose.connect("mongodb+srv://Ecommerce:9325397711@ecommerce.orcvv3y.mongodb.net/");
console.log("Connected Done");
}catch(error){
    console.log("Error in Connection",error);
}
}

module.exports ={connectDB};
