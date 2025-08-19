import * as dotenv from 'dotenv';
import * as path from 'path';

// Load correct .env file based on NODE_ENV
const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'dev'}`);
dotenv.config({ path: envPath });

export const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    db: {
        host: process.env.DB_HOST!,
        user: process.env.DB_USER!,
        pass: process.env.DB_PASS!,
    },
    jwt: {
        secret: process.env.JWT_SECRET!,
    },
};
