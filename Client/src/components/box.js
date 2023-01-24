import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { message, Popconfirm, Modal } from 'antd';
import AddItem from '../containers/admin/addItem';

const Box = ({ item, fetchData }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const deleteItem = () => {
        axios.delete('http://localhost:4000/items', { data: { id: item._id } })
            .then(response => response ? fetchData() : null)
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    const confirm = (e) => {
        deleteItem()
        message.success('Deleted Successfully');
    };
    const cancel = (e) => {
        message.error('Abort deleting');
    };

    return (
        <div className='col-md-4'>
            <div class="card" style={{ height: '305px', marginBottom: '10px', padding: '20px', backgroundColor: 'aliceblue' }}>
                <div class="card-body" style={{ marginLeft: '40px' }}>
                    <h5 class="card-title">Item Name: {item.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{item.brand}</h6>
                    <p class="card-text">Price: {item.price}</p>
                    <p class="card-text">Brand: {item.brand}</p>
                    <p class="card-text">Size: {item.size}</p>

                    <button className='btn btn-success' type="primary" onClick={showModal}>Edit Item</button>
                    <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
                        <AddItem name="edit" fillForm={item} fetchData={fetchData} />
                    </Modal>

                    &nbsp; &nbsp;
                    <Popconfirm title="Delete the task" description="Are you sure to delete this task?"
                        onConfirm={confirm} onCancel={cancel} okText="Delete" cancelText="cancel" style={{ color: 'red' }}>
                        <button className='btn btn-danger' type="submit">Delete</button>
                    </Popconfirm>
                </div>
            </div>
        </div>
    )
}
export default Box