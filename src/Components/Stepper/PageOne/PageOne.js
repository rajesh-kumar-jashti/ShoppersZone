import React from "react";
import "./PageOne.css";
import CartItems from "../../CartItems/CartItems";
import Footer from "../../Footer/Footer";

const PageOne = ({ onButtonClick}) => {

  return (
    <main>
        <div className="but">
            <div className="pageone-content">
                <CartItems/>
            </div>
            <div className="pageone-button">
              <button style={{cursor: "pointer"}} onClick={() => onButtonClick("pageone")}>Previous</button>
              <button style={{cursor: "pointer"}} onClick={() => onButtonClick("pagetwo")}>Check Out</button>
            </div>
            <Footer/>
        </div>
    </main>
  );
};

export default PageOne;
