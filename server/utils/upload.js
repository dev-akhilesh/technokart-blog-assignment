import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const storage = new GridFsStorage({
    url: "mongodb+srv://akhileshtakawale703:" +
        process.env.MONGO_PASSWORD +
        "@cluster0.47wrssa.mongodb.net/blogapp?retryWrites=true&w=majority",
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({ storage }); 
