// Package Imports
import { Request, Response } from 'express';

// DB Imports
import { supabase } from '../connection/connection';

export const getClients = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { data: client, error } = await supabase
            .from('client')
            .select('*');
        if (error) {
            console.error('Error fetching clients:', error);
            res.status(500).send(error);
        }
        res.status(200).send(client);
    } catch (error) {
        res.status(500).send({ error: error });
    }
}

export const getClientByID = async (req: Request, res: Response): Promise<void> => {
    const clientId = req.params.clientId;
    try {
        const { data, error } = await supabase
            .from('client')
            .select(`
                *,
                bill(*)
            `)
            .eq('id', clientId)
            .single();

        if (error) {
            throw error;
        }

        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: "No existe este usuario." });
    }
}