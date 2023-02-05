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
// relative imports
import { registerUser } from "./controllers/auth.controller.js";
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/users.routes.js"
import postsRoutes from "./routes/posts.routes.js"
import { verifyToken } from "./middleware/auth.middleware.js";

// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet(), crossOriginResourcePolicy({ policy: "cross-origin" }));
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

// ROUTES WITH FILES
app.post( "/auth/register", upload.single( "picture" ), registerUser )
app.post( "/posts",verifyToken, upload.single( "picture" ), createPost )

// ROUTES
app.use( "/auth", authRoutes )
app.use( "/users", userRoutes )
app.post("/posts", postsRoutes)

const port = process.env.PORT || 3001;

// MONGO Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(
      port,
      () => console.log(`server started running on port: ${port}`)
    )
  )
  .catch((err) => console.log(`${err} occured`));
