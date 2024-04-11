import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

//variables
const app = express();
const PORT = process.env.PORT || 5000;

//config
dotenv.config();

//middlewares
app.use(express.json()); //to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`)
});