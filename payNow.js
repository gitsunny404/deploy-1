var options = {
    "key": "rzp_test_ux8rvDmd0mssXs",
    "amount": "1000",
    "currency": "INR",
    "name": "Your Company Name",
    "description": "Test Transaction",
    "image": "https://yourcompany.com/logo.png",
    "order_id": "",
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  };


  function PayNow(){
    console.log("Payment initiated")
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }