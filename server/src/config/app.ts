const dotenv = require('dotenv');
dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV;
export const PORT = process.env.PORT;