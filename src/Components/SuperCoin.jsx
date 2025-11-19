import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

function SuperCoin() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const [superCoin,setSuperCoin] = useState(0);
    const [milestone,setMilestone] = useState(0);
    const totalAmount = cartItems.reduce((total,item) => total + item.price * item.quantity,0);

    useEffect(() => {

         const nextMilestone = Math.floor(totalAmount/ 100);
        if(nextMilestone > milestone){
            setSuperCoin(superCoin => superCoin+10);
        }
    },[totalAmount,milestone]);

    return(
        <>
        <div className="super-coin" style={{textAlign: 'center'}}>
            <h3 className="super-coin-title">Supercoins</h3>
            <p className="super-coin-info">With this purchase you will gain {superCoin} redeemable SuperCoins!</p>
        </div>
        
        </>
    )
       

   
}

export default SuperCoin;