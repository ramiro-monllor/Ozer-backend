// Package Imports
import express, { urlencoded, json } from 'express'
import morgan from "morgan";
import cors from "cors";

// Route Imports
import routes from './routes'

const app = express()
const PORT = 3001

const corsOptions = {
    // origin: 'http://localhost:3001/',
    origin: '*', // para permitir cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(morgan("dev"));
app.use(json());
app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));

app.use('/api', routes)

app.listen(PORT, () => {
    console.log('--------------------------------------');
    console.log(`Server listening on Port: ${PORT}`);
    console.log('--------------------------------------');
})