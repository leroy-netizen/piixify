import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { crossOriginOpenerPolicy } from "helmet";
import { crossOriginResourcePolicy } from "helmet";

// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet, crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// FILE STORAGE

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filenane: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer( { storage } );

const port = process.env.PORT
console.log(port)


// MONGO Connection
mongoose.connect( process.env.MONGO_URI, {
  useUnifiedTopolgy: true,
  useNewUrlParser: true
}).then(() => app.listen(port, ()=> console,log))
