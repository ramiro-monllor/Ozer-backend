// Package Imports
import express, { json } from 'express'
import morgan from "morgan";

const app = express()
const PORT = 3001

app.use(morgan("dev"));
app.use(json());

app.listen(PORT, () => {
    console.log('--------------------------------------');
    console.log(`Server listening on Port: ${PORT}`);
    console.log('--------------------------------------');
})