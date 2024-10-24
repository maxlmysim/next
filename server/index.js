import express from 'express';
import {connectMongo} from "./db.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json());


const start = async () => {
    await connectMongo()
    app.listen(process.env.PORT, ()=> {
        console.log('Server started on port', process.env.PORT)
    })

}

start()