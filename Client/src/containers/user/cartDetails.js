import React, { useEffect, useState } from 'react';


const CartDetails = () => {

    const [cartItem, setCartItem] = useState([])

    const fetchCartData = async() => {
        const response = await fetch(`http://localhost:4000/cart`)
        const data = await response.json()
        if (data) {
            debugger
            setCartItem(data.cartInfo)
        }
    }

    useEffect(() => {
        fetchCartData()
    }, [])

    return(
        <>

        <h1> Hey all I am in cart hahahahahahahahahahaha </h1>
        <div> {cartItem.length > 0 ? cartItem.map((item, id) => {
            return(
                <div className='card'>{item}</div>
            )
        }) : 'no items in cart'} </div>
        
        </>
    )
}

export default CartDetails;