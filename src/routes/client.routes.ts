// Package Imports
import { Router } from "express";

// Controller Imports
import { getClients } from "../controllers/client";

const client = Router()

client.get('/', getClients)
// client.get('/:clientId', getClientByID)

export default client;