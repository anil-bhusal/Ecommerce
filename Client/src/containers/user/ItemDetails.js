import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'

function ItemDetails() {
  const [itemList, setItemList] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/items")
    const data = await response.json()

    if (data) {
      setItemList(data.itemList)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <section>
        <div className='container'>
          <div className='orderList'>
            <h1 className='title'><i><FontAwesomeIcon icon={faDolly} /></i> &nbsp; Item List</h1><br />
            {itemList.length > 0 ? itemList.map((item, id) => {
              return (
                <div class="card" style={{ width: '25rem', marginBottom: '10px', padding: '20px', backgroundColor: 'aliceblue' }}>
                  <div class="card-body" style={{ marginLeft: '40px' }}>
                    <h5 class="card-title">Item Name: {item.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{item.brand}</h6>
                    <p class="card-text">Price: {item.price}</p>
                    <p class="card-text">Brand: {item.brand}</p>
                    <p class="card-text">Size: {item.size}</p>
                  </div>
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