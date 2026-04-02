//packages
import path from 'path'
import express, { urlencoded } from "express"
import cookieParser from 'cookie-parser'

//utils
import userRoutes from "./routes/user.routes.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/user', userRoutes);

export default app;