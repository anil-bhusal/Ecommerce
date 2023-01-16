import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'
import ItemList from '../admin/itemList'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setItemDetails } from '../../reducers/itemSlice'

const Dashboard = () => {
  const [itemList, setItemList] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  const sendItem = (item) => {
    console.log(item)
    navigate('/itemdetails')
    dispatch(setItemDetails(item))
  }

  return (
    <>
      <section>
        <div className='container'>
          <div className='orderList'>
            <h1 className='title'><i><FontAwesomeIcon icon={faDolly} /></i> &nbsp; Item List</h1><br />
            <div className='row'>
              {itemList.length > 0 ? itemList.map((item, id) => {
                return (
                  <div className='col-md-4'>
                    <div class="card" onClick={() => { sendItem(item) }} style={{ height: '250px' ,marginBottom: '10px', padding: '20px', backgroundColor: 'aliceblue' }}>
                      <div class="card-body" style={{ marginLeft: '40px' }}>
                        <h5 class="card-title">Item Name: {item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.brand}</h6>
                        <p class="card-text">Price: {item.price}</p>
                        <p class="card-text">Brand: {item.brand}</p>
                        <p class="card-text">Size: {item.size}</p>
                      </div>
                    </div>
                  </div>
                )
              }) : 'list not found'}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
