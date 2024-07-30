import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.47wrssa.mongodb.net/blogapp?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
