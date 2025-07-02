console.log('Hello, World!');
const express = require('express');
const connectDB = require('./database')
const app = express();
const userModel = require('./models/user');

app.post("/signUp", async (req, res, next) => {
    try{
         const userObject = {
        name: "John Doe",   
        email: "sachin1@gmail.com",
        age: 25,
        gender:'male',
        createdAt: new Date(),
        password: "password123",
    }
    const user = new userModel(userObject);
    await user.save()  //save the user to the database
    res.send('successfully signed up');
    }catch (error) {
        console.error('Error during sign up:', error);  
    }
   
})

connectDB().then(() => {
    console.log('Database connection established');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })

}).catch((error) => {
    console.error('Database connection failed:', error);
});
const port = 3000;

app.use("/", (req, res, next) => {
    const token = "xys"
    const isAdminAuthenticated = false;
    if (isAdminAuthenticated) {
        next();
    } else {
        console.log("Unauthorized access to admin route");
        res.status(401).send('Unauthorized');
    }
})

app.get("/user/:userId", (err, req, res, next) => {
    //route handler
    const id = req.params
    console.log(id);
    res.send(`Hello, World! ${id.userId} `);
})

app.get("/user", (req, res, next) => {
    res.send('Hello, World! ');
})

app.use("/", (req, res, next) => {
    res.send('Hello, World! sri ');
})

//order of writing the codeis important
//middleware is executed in the order it is written
//if you write the /user route after the / route, it will never be executed
// before it reach the router outlet it will execute the middleware
//if you write the /user route before the / route, it will be executed first

//schema is a blueprint for the data
