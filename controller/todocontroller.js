const Todo=require('../model/todomodel'); 
 
 
const getTodos=(req,res)=>{ 
 
 Todo.find() 
 .then(result=>{ 
 console.log('result: ',result) 
 res.send(result.length>0?result:'No Todos'); 
 }) 
 .catch(err=>{ 
 console.log(err); 
 }) 
} 
 
const posttodos=(req,res)=>{ 
 
    Todo.create(req.body) 
    .then(result=>{ 
    console.log('result: ',result) 
    res.status(200).send(result) 
    }) 
    .catch(err=>{ 
    console.log(err); 
    }) 
   } 
 
module.exports={ 
 getTodos,posttodos 
} 