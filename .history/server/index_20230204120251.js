import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import helmet from 'helmet' 
import morgan from 'morgan'
import path from "path"
import { fileURLToPath } from 'url'


// configurations
const __filename = fileURLToPath( import.meta.url )
const dirname = path.dirname( __filename )

confi