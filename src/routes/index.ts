// Package Imports
import { Router } from "express";

// Route Imports
import client from "./client.routes";
import bill from "./bill.routes";

const routes = Router()

routes.use('/client', client)
routes.use('/bill', bill)

export default routes