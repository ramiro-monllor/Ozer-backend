// Package Imports
import { Request, Response } from 'express';

// DB Imports
import { supabase } from '../connection/connection';

export const getClients = async (_req: Request, res: Response): Promise<void> => {
    const { data: client, error } = await supabase
        .from('client')
        .select('*');
    if (error) {
        console.error('Error fetching clients:', error);
        res.status(500).send(error);
    }
    res.status(200).send(client);
}