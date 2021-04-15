
const mongoose = require("mongoose");


let addressString = process.env.mongo || "";
let optionen = { useNewUrlParser: true, useUnifiedTopology: true };

const verbindeDB = () => {

    
    mongoose.connect(addressString, optionen).then( (mongooseModul) => {
        console.log("connect server...");
     

    } ).catch( (fehler) => {
        console.error("Fehler mit MongoDB: "+fehler);
    } );

}

module.exports = verbindeDB;
