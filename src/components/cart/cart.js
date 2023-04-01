import { useContext, useRef } from "react";
import { CartContext } from "../context/cart-context";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";

const Cart = () => {
    const {CartData}=useContext(CartContext)
    const total = useRef();
    const Razorpay=useRazorpay();
    const useRazorpay = useCallback(async (total)=>{
         const options = {
            key: "rzp_test_ZowOBED9YBK2VS",
            amount: total*100,
            currency :"INR",
            name: "10x-Gaming_site",
            description:"Gaming-Transaction",
            handler:(res)=>{
                console.log(res);
            },
            prefill:{
                name: "Shivam Dwivedi",
                email: "dwivedi123sh@gmail.com",
                contact:"1234567890"
            },
            notes: {
                address: "work-address"
            },
            theme: {
                color: "#3399cc",
              },
         }
         const rzp1 = new Razorpay(options);
         rzp1.open();
    },  [Razorpay])
    return (
        <>
          <section>
          <section>
          {CartData.map((cartItem)=>{
            return (
                <article>
                    <image src="" alt=""/>
                    <article>{cartItem.title}</article>
                    <article>{cartItem.price}</article>
                    <button>Remove from cart</button>
                </article>
            )
        })}
        </section>
        <section>
            <article>Billing information </article>
            {CartData.map((cart)=>{
            //total.current.price=total.current.price + cart.price   
            return <article>
                    <span>{cart.title}</span>
                    <span>{cart.price}</span>
                    </article>
            })}
            <article>Total: 3000</article>
            <button onClick={()=>{Razorpay(6000)}}>Checkout</button>
        </section>
          </section>
           
        </>
    )
}
export default Cart;