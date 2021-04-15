
const mongoose = require("mongoose");


let addressString = process.env.mongo || "mongodb+srv://andre:andre@cluster0.icu1z.mongodb.net/test";
let optionen = { useNewUrlParser: true, useUnifiedTopology: true };

const verbindeDB = () => {

    
    mongoose.connect(addressString, optionen).then( (mongooseModul) => {
        console.log("connect server...");
     

    } ).catch( (fehler) => {
        console.error("Fehler mit MongoDB: "+fehler);
    } );

}

module.exports = verbindeDB;