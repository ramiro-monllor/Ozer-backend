// Package Imports
import express, { urlencoded, json } from 'express'
import morgan from "morgan";
import { createClient } from '@supabase/supabase-js'

// Interface Imports
import { Database } from './types/supabase'

// Util Imports
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./utils/config"

const app = express()
const PORT = 3001

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

const supabase = createClient<Database>(
    SUPABASE_URL!,
    SUPABASE_ANON_KEY!
);

app.listen(PORT, () => {
    console.log('--------------------------------------');
    console.log(`Server listening on Port: ${PORT}`);
    console.log('--------------------------------------');
})