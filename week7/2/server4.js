const express= require('express');
const inventory=require('./inventory.js');

const server = express(); // ✅ Aici declari serverul Express

server.use(express.json()); // ✅ Automatizează parsing-ul JSON

server.delete('/inventory/:id',(req,res)=>{
  const id=Number(req.params.id);
  const index=inventory.findIndex((item)=>item.id ===id);

  if(index===-1){
    return res.status(404).json({message:'Item not found'});
  }

  const deletedItem=inventory.splice(index,1)[0];//Remove item from array

  res.json({message:'Item deleted',item:deletedItem});
});
                                
server.put('/inventory/:id',(req,res)=>{
  const id=Number(req.params.id);
  const item=inventory.find((item)=>item.id ===id);

  if(!item){
    res.status(404).json({message:'Item not found'});
  }else{
    Object.assign(item,req.body);
    res.json({message:'Item updated',item});
  }
});


server.post('/inventory',(req,res)=>{
  const newItem=req.body;
  newItem.id=inventory.length+1;
  inventory.push(newItem);
  res.json({message:'Product added',item:newItem});
});



server.get('/inventory',(req,res)=>{
  res.json(inventory);
});

server.listen(3000,()=>{
  console.log('Server is running on port 3000');
});