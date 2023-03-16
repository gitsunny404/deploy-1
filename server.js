import express from 'express';
import bodyParser from 'body-parser';
import { createOrder } from './createOrder.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());

// Test run
app.get('/', (req, res)=>{
    res.send("Razorpay payment gateway");
});
app.use(cors());
// 1. Create Order
app.post("/createorder", createOrder);

app.listen(3000, () => console.log("Server started on port 3000"));
