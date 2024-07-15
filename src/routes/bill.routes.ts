// Package Imports
import { Router } from "express";

// Controller Imports
import { createBill, deleteBill, getBills, updateBill } from "../controllers/bill";

const bill = Router()

bill.get('/', getBills)
bill.post('/', createBill)
bill.put('/:billId', updateBill)
bill.delete('/:billId', deleteBill)

export default bill;