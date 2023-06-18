const express = require('express');
const cors = require('cors');
const app = express();

app.use (cors());

const port = process.env.PORT || 5000;

const users = [
    {id:"1" , name: "saju " , email : "saju1234@gmail.com"},
    {id:"2" , name: "shathil " , email : "shathil1234@gmail.com"},
    {id:"3" , name: "masud " , email : "masud1234@gmail.com"},
    {id:"4" , name: "mukramin " , email : "mukramin1234@gmail.com"},
]

app.get('/users', (req , res ) => {
    res.send (users);
})

app.get ('/', (req , res ) =>{
    res.send ('The server is running in localhost 5000')
})

app.listen (port , () => {
    console.log (`server is running in the port no ${port}`)
});