const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://neeraj:25112000@cluster0.2i7c3.mongodb.net/gymcoll?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("connection to mongo......"))
.catch((error)=> console.log("error"));