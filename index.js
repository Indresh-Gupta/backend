import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './route/userRouter.js'; 

const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();



const port =process.env.PORT || 8000;
const URL=process.env.MONGOURL;



app.get("/",(req, res)=>{
res.send("this is root route");
});

mongoose.connect(URL).then(()=>{
     console.log("DB is connected successfully");

     app.listen(port, (req, res)=>{
        console.log(`server is listening on port:${port}`);
    });
    
}).catch(error=>console.log(error));


app.use("/api", route);
