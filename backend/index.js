const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 3000;
const {connectDB} = require('./connection');
const userRouter = require('./routes/user');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const messageRouter = require('./routes/message');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
connectDB(MONGO_URI);

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(checkLoggedin);

app.use('/user',userRouter);
app.use('/message',messageRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})