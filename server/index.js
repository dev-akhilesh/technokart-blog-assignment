import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import Router from './routes/route.js';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/', Router);

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Connect to MongoDB
mongoose.connect("mongodb+srv://akhileshtakawale703:" +
    process.env.MONGO_PASSWORD +
    "@cluster0.47wrssa.mongodb.net/blogapp?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
