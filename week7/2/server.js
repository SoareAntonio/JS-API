import http from 'http';
import { tasks } from './task.js';
//facut din pur JS
const server= http.createServer ((req,res)=>{
  if(req.url==="/tasks" && req.method === "GET"){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(tasks));
  }else{
  res.writeHead(404,{"Content-Type":"application/json"});
  res.end(JSON.stringify({message:"Not found"}));
  }
})

server.listen(3000,()=>{
  console.log("Server running on port 3000");
});