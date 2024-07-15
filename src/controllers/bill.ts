// Package Imports
import { Request, Response } from 'express';

// DB Imports
import { supabase } from '../connection/connection';

export const getBills = async (_req: Request, res: Response): Promise<void> => {
    const { data: bill, error } = await supabase
        .from('bill')
        .select('*');
    if (error) {
        console.error('Error fetching bills:', error);
        res.status(500).send(error);
    }
    res.status(200).send(bill);
}