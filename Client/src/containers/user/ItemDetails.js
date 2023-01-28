import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { message } from 'antd';
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_BASE_URL);

const ItemDetails = () => {
  const [itemList, setItemList] = useState([])
  const [cartItem, setCartItem] = useState(0)

  const { _id, token } = useSelector(state => state.item)

  const fetchData = async () => {
    const response = await fetch(`http://localhost:4000/items/${_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await response.json()

    if (data) {
      setItemList(data.itemList)
    }
  }

  useEffect(() => {
    fetchData()
    socket.on('connect');
  }, [])


  const addToCart = async (cartValues) => {
    console.log(cartValues)

    socket.emit('requestCart', cartValues)
    debugger
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartValues)
    };
    debugger
    const response = await fetch('http://localhost:4000/cart', requestOptions);
    const data = await response.json()
    if (data) {
      message.success(data.msg)
    }
    setCartItem(data.itemInCart)
  }

  return (
    <>
      <section>
        <div className='container'>
          <div className='orderList'>
            {itemList.length > 0 ? itemList.map((item, id) => {
              const { _id, ...data } = item
              return (
                <div class="card" style={{ width: '25rem', marginBottom: '10px', padding: '20px', backgroundColor: 'aliceblue' }}>
                  <div class="card-body" style={{ marginLeft: '40px' }}>
                    <h5 class="card-title">Item Name: {item.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{item.brand}</h6>
                    <p class="card-text">Price: {item.price}</p>
                    <p class="card-text">Brand: {item.brand}</p>
                    <p class="card-text">Size: {item.size}</p>
                  </div>
                  <button onClick={() => addToCart(data)}>add to cart</button>
                </div>
              )
            }) : 'list not found'}
          </div>
        </div>
      </section>
    </>
  );
}

export default ItemDetails;
