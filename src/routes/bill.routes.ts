// Package Imports
import { Router } from "express";

// Controller Imports
import { getBills } from "../controllers/bill";

const bill = Router()

bill.get('/', getBills)
// bill.get('/:billId', getBillByID)

export default bill;