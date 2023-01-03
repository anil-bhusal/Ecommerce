import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = ({ item }) => {

    return (
        <div class="card" style={{width: '40rem', marginBottom: '10px', padding: '20px', backgroundColor: 'aliceblue'}}>
            <div class="card-body" style={{marginLeft: '40px'}}>
                <h5 class="card-title">Item Name: {item.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.brand}</h6>
                <p class="card-text">Price: {item.price}</p>
                <p class="card-text">Brand: {item.brand}</p>
                <p class="card-text">Size: {item.size}</p>

                <button className='btn btn-success' type="submit">Edit Item</button> &nbsp; &nbsp;
                <button className='btn btn-danger' type="submit">Delete Item</button>                
            </div>
        </div>
    )
}
export default Box