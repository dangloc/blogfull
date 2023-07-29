import express from "express";
import cookieParser from "cookie-parser";

import authRouters from './routes/auth.js'
import userRouters from './routes/users.js'
import postRouters from './routes/posts.js'
import multer from 'multer';

const app = express();


app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRouters);
app.use('/api/users', userRouters);
app.use('/api/posts', postRouters);

app.listen(8800, ()=> {
    console.log("Server is running on port 8800");
})