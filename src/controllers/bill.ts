// Package Imports
import { Request, Response } from 'express';

// DB Imports
import { supabase } from '../connection/connection';

export const getBills = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { data: bill, error } = await supabase
            .from('bill')
            .select('*');

        if (error) {
            console.error('Error fetching bills:', error);
            res.status(500).send(error);
        }

        res.status(200).send(bill);
    } catch (error) {
        res.status(500).send({ error: error });
    }
}

export const createBill = async (req: Request, res: Response): Promise<void> => {
    const { date, client_id, amount } = req.body;
    try {
        const { data, error } = await supabase
            .from('bill')
            .insert([
                { date: date, client_id: client_id, amount: amount },
            ])
            .select()

        if (error) {
            console.error('Error creating bill:', error);
            res.status(500).send(error);
        }

        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({ error: error });
    }
}

export const updateBill = async (req: Request, res: Response): Promise<void> => {
    const billId = req.params.billId;
    const { date, client_id, amount } = req.body;

    try {
        const { data, error } = await supabase
            .from('bill')
            .update({ date, client_id, amount })
            .eq('id', billId)
            .select();

        if (error) {
            console.error('Error updating bill:', error);
            res.status(500).send(error);
        }

        res.status(200).send(data);
    } catch (error: any) {
        console.error('Error updating bill:', error);
        res.status(500).send({ error: error.message || 'An unexpected error occurred.' });
    }
};

export const deleteBill = async (req: Request, res: Response): Promise<void> => {
    const billId = req.params.billId;
    try {
        const { data, error } = await supabase
            .from('bill')
            .delete()
            .match({ id: billId });

        if (error) {
            console.error('Error deleting bill:', error);
            res.status(500).send({ error: error.message });
        }

        res.status(200).send(data);
    } catch (error: any) {
        res.status(500).send({ error: error.message || "An unexpected error occurred." });
    }
}