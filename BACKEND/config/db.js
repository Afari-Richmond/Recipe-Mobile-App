

import {neon} from '@neondatabase/serverless';
import "dotenv/config"

// CREATE A SQL CONNECTION USING THE CONNECTION STRING FROM THE .ENV FILE
export const sql = neon(process.env.DATABASE_URL)