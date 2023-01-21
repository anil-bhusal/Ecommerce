import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'
import { cartHandler } from '../../utils/cartHandler'
import { useSelector } from 'react-redux'

const ItemDetails = () => {
  const [itemList, setItemList] = useState([])
  const [cartItem, setCartItem] = useState(0)

  const { _id } = useSelector(state => state.item)

  const fetchData = async () => {
    const response = await fetch(`http://localhost:4000/items/${_id}`)
    const data = await response.json()

    if (data) {
      setItemList(data.itemList)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addToCart = async (values) => {
    // cartHandler(values)
    console.log(values)
    debugger
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };
    debugger
    const response = await fetch('http://localhost:4000/cart', requestOptions);
    const data = await response.json()
    if (data) {
      alert(data.msg)
    }
    setCartItem(data.itemInCart)

    if (response.status == 200) {
      setTimeout(() => {
        cartHandler()
      }, 3000);
    }
    window.location.reload(false)
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
