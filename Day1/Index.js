
const express = require('express'); 
const app = express();  
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myDatabase',{
  useNewurlParser : true, 
  useUnifiedTopology : true
}).then(()=>{
  console.log("connecction sucessful");
}).catch(()=>{
  console.log("not connected"); 
})
// agar aise name diya hai jaise jo db exist hi nahi karta vo create karr dega firr usko 

app.listen(2330, ()=>{
  console.log("server is started");
})

app.get('/' , (req , res)=>{
  res.send('Hello ji , kase ho ')
})

 const bodyParser = require('body-parser'); 
 app.use(bodyParser.json()); 

app.post('/api/cars' , (req,res)=>{
const {name , brand} = req.body; 
console.log(name);
console.log(brand);
res.send("car has been submitted"); 
})

