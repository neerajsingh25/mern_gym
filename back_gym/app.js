const express = require('express');
const app=express();
const port=5000;
require('./conn.js');
const User = require('./users/joinschema');
const myUser = require('./users/contactSchema');

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("hello this is home");
})


app.post('/join', (req,res)=>{
    const { first, last, email, gender, city, age}= req.body;
    
    if(!first || !last || !email || !gender || !city || !age){
        return res.status(422).json({ error: "filled the all given data"});
    }

    const user = new User({ first, last, email, gender, city, age});
    user.save().then(()=>{
        res.status(201).json({ message: "user registered successfuly"});
    }).catch((error)=> res.status(500).json({error: "failed to register"}));
})

app.post('/contact', (req,res)=>{
    const { name, email, comment }= req.body;

    if(!name || !email || !comment){
        return res.status(422).json({ error: "filled the all given data"});
    }

    const myuser = new myUser({ name, email, comment});
    myuser.save().then(()=>{
        res.status(201).json({ message: "message sent succesguly"});
    }).catch((error)=> res.status(500).json({error: "failed to sent"}));
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})