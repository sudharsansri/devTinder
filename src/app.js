console.log('Hello, World!');
const express = require('express');
const app = express();  
const port = 3000;  

app.use("/use",(req, res, next) => {
    res.send('Hello, World! ');
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

