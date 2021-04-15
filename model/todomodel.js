const mongoose=require('mongoose'); 
 
const todoSchema=mongoose.Schema({ 
    name: [{
        type: String
 }]
})
const Todo=mongoose.model('todomodel',todoSchema); 
module.exports=Todo; 