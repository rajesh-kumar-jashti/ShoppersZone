import React from "react";
import "./PageThree.css";
import Payment from "../../Payment/Payment";
import { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import Footer from "../../Footer/Footer";

const PageThree = ({onButtonClick}) => {
  
  const { getTotalCartAmount  } = useContext(ShopContext);
  const amount = getTotalCartAmount()*100;
    const currency = "INR";
    const receiptId = "qwsaq1"
    
    const paymentHandler = async (e) => {
        const response = await fetch("https://shopperszonebackend.onrender.com/order", {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                receipt: receiptId
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        const order = response.json();
        console.log(order);

        var options = {
            key: "rzp_test_4Kha1JOmsjJ22G", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            name: "Shoppers Zone", //your business name
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {
              const body = {
                ...response,
              };
      
              const validateRes = await fetch(
                "https://shopperszonebackend.onrender.com/order/validate",
                {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const jsonRes = await validateRes.json();
              console.log(jsonRes);

              if (jsonRes.msg === "success") {
                // Payment success
                onButtonClick("pagefour");
              } else {
                // Payment failed
                alert("Payment Failed");
              }
            },
            prefill: {
              //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
              name: "Rajesh Kumar Jashti", //your customer's name
              email: "rajeshkumarjashti@gmail.com",
              contact: "9000000000", //Provide the customer's phone number for better conversion rates
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          var rzp1 = new window.Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          });
          rzp1.open();
          e.preventDefault();
    }

    return (
      <main>
        <div className="but">
          <Payment/>
          <div className="pagethree-button">
            <button onClick={() => onButtonClick("pagetwo")}>Previous</button>
            <button onClick={paymentHandler}>Pay</button>
          </div>
        </div>
        <Footer/>
      </main>
    );
}

export default PageThree;