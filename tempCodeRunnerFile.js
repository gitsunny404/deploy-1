import * as dotenv from 'dotenv'
dotenv.config();

console.log(process.env) // remove this after you've confirmed it is working

console.log( "BUCKET  ", process.env.S3_BUCKET);