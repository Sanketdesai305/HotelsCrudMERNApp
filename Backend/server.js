
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Or, enable CORS for a specific origin
app.use(cors({
  origin: 'http://localhost:3000' // Allow only this origin
}));
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
const users = [
    {id:1, hotelName:"Hilton Garden", name:'John',email:"john@gmail.com"},
    {id:2, hotelName:"Radisson Blu", name:'Doe',email:"Doe@gmail.com"}
]

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/users',(req,res)=>{
res.json(users);
});

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=>user.id === parseInt(id));
    console.log("id",id,"user",user);
    if(user){
        res.json(user);
    }else{
        res.json({message:'user not found'})
    }
});

app.post("/user", (req, res) => {
    const { hotelName,name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    console.log("Hotel",hotelName,"name", name, "email", email);
    const user = { id: users.length + 1, name, email };
    users.push(user);
    res.json(user);
});

app.put('/user/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find(user=>user.id === parseInt(id));
    if(!user){
        res.json({message:'user not found'});
    }else{
        const {name,email} = req.body;
        user.name = name;
        user.email = email;
        res.json(user);
    }
});

app.delete("/user/:id",(req,res)=>{
    const id = req.params.id;
    const user = users.findIndex(user=>user.id === parseInt(id));
    if(user === -1){
        res.json({message:'user not found'});   
    }else{  
        users.splice(user,1);
        res.json({message:'user deleted'});
    }
});
app.listen(3001,()=>console.log('listening!'))