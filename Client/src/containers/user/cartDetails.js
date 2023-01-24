import React, { useEffect, useState } from 'react';


const CartDetails = () => {

    const [cartItem, setCartItem] = useState([])
    const [uniqCart, setUniqItem] = useState([])
    const [itemNoInCart, setItemNOInCart] = useState([])


    const fetchCartData = async () => {
        const response = await fetch(`http://localhost:4000/cart`)
        const data = await response.json()
        const cartInfo = data.cartInfo
        // if (data) {
        //     setCartItem()
        // }
        console.log("111111111111111", cartInfo)

        const uniqueCartItem = []
        const noOfSameItemInCart = []
        cartInfo.map((item, id) => {
            if (!uniqueCartItem.includes(item.name)) {
                uniqueCartItem.push(item.name)
            } else {
                noOfSameItemInCart.push(item._id)
            }
        })
        console.log("2222222222", uniqueCartItem)
        setUniqItem(uniqueCartItem)
        setItemNOInCart(noOfSameItemInCart.length + 1)
    }

    useEffect(() => {
        fetchCartData()
    }, [])

    return (
        <>
            <div> {uniqCart.length > 0 ? uniqCart.map((item, id) => {
                // debugger
                return (
                    <div className='card'>name: {item}</div>
                )
            }) : 'no items in cart'} </div>
            {itemNoInCart}
        </>
    )
}

export default CartDetails;