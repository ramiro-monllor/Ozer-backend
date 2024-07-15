// Package Imports
import { createClient } from '@supabase/supabase-js'

// Interface Imports
import { Database } from '../types/supabase'

// Util Imports
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../utils/config"

export const supabase = createClient<Database>(
    SUPABASE_URL!,
    SUPABASE_ANON_KEY!
);
