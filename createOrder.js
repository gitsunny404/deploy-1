import Razorpay from 'razorpay'

const ID = 'rzp_test_ux8rvDmd0mssXs';
const KEY = 'N478vTH92fW6tK2sWaOTVKi3';


const razorpay = new Razorpay({
  key_id: ID,
  key_secret: KEY,
});


//1. POST  create Order for order id for next step
export function createOrder(req, res) {
    const amount = req.body.amount || 1700;
    const currency = req.body.curr || "INR";
  
    console.log("Amount in createorder.js",amount)

    const options = {
      amount: amount,
      currency: currency,
      receipt: "order_rcptid_" + Math.random().toString(36).substring(7),
    };
  
    razorpay.orders.create(options, function (err, order) {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: "Something went wrong",
        });
      }
  
      res.json(order);
      console.log(order);
      return order
    });
  }