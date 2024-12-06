const mongoose = require("mongoose")   ; 

  async function mydb(){

     await   mongoose.connect("mongodb://localhost/AOO") ;
     console.log("database conneted sucessfully") ; 
 }

 mydb() ; 

 module.exports  =  mongoose.connection;