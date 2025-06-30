console.log('Hello, World!');
const express = require('express');
const app = express();  
const port = 3000;  

app.get("/use",(req, res, next) => {
    res.send('Hello, World! ');
})
app.post("/user",(req, res, next) => {
    res.send('Hello, Worldffff! ');
})
app.use("/",(req, res, next) => {
    res.send('Hello, World! sri ');
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

//order of writing the codeis important

