import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express ();

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import userPost from './routes/mindpost.js';
import userComment from './routes/Comment.js';
import authUser from './routes/auth.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import cors from 'cors';

app.use ('/images', express.static (path.join (__dirname, '/images')));
dotenv.config ();

const connect = async () => {
  try {
    await mongoose.connect (process.env.MONGO);
    console.log ('Connected to mongoDB.');
  } catch (error) {
    throw error;
  }
};

const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, 'images');
  },
  filename: (req, file, cb) => {
    cb (null, req.body.name);
  },
});

const upload = multer ({storage: storage});
app.post ('/api/upload', upload.single ('file'), (req, res) => {
  res.status (200).json ('File has been uploaded');
});

app.use (express.json ());
app.use (cors ());
//MIDDLEWARES
app.use ('/api/users', usersRoute);
app.use ('/api/auth', authRoute);
app.use ('/api/mind', userPost);
app.use ('/api/comment', userComment);
app.use ('/api/auth', authUser);
app.use (cookieParser ());

app.use ((err, req, res, next) => {
  return res.status (500).json ('Hello error from handler');
});

app.listen (8800, () => {
  connect ();
  console.log ('Connected to backend.');
});

// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
// import hotelsRoute from "./routes/hotels.js";
// import roomsRoute from "./routes/rooms.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// const app = express();
// dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://ishwor19944:ishwor19944@cluster0.zdtcm.mongodb.net/?retryWrites=true&w=majority");
//     console.log("Connected to mongoDB.");
//   } catch (error) {
//     throw error;
//   }
// };

// mongoose.connection.on("disconnected", () => {
//   console.log("mongoDB disconnected!");
// });

// //middlewares
// app.use(cors())
// app.use(cookieParser())
// app.use(express.json());

// app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
// app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

// app.listen(8800, () => {
//   connect();
//   console.log("Connected to backend.");
// });
