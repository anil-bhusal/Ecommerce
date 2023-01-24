import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import '../components/style/navigation.css'
import { useDispatch, useSelector } from "react-redux"
import { setUserDetailsNull } from '../reducers/userSlice'
import { useNavigate, Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image, Button, Drawer } from 'antd';
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import {cartHandler} from '../utils/cartHandler'
import io from 'socket.io-client';
const socket = io('http://localhost:4000');

const Navigation = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [cartDetails, setCartDetails] = useState(false)

    const [cartItem, setCartItem] = useState(0)

    const { fullName, userRole } = useSelector(state => state.user)

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const items = [
        {
            label: <li>Profile</li>,
            key: '1',
        },
        {
            label: <li onClick={() => changePassword()}>Change Password</li>,
            key: '2',
        },
        {
            label: <li><Link to="/" onClick={() => logout()}>Logout</Link></li>,
            key: '3',
        },
    ];

    const changePassword = () => {
        navigate("/changepassword");
    };

    const logout = () => {
        dispatch(setUserDetailsNull());
        navigate("/");
    };

    const itemInCart = async() => {
       const data = await cartHandler()
       debugger;
        if (data) {
            setCartItem(data.itemInCart)
        } 
        socket.on('values', (values) => {
            setCartItem(data.itemInCart)                
        })   
    }

    useEffect( () => {
        itemInCart()
    }, [])

    useEffect(() => {
        if(cartItem.length > 0){
            socket.on('values', (values) => {
                
            })
        }
    }, [socket])

    return (
        <>
            {userRole ?
                <div>
                    {userRole === 'admin' ? (
                        <nav class="navbar" id="navbar">
                            <div class="navbar-container container">
                                <input type="checkbox" name="" id="" />
                                <div class="hamburger-lines">
                                    <span class="line line1"></span>
                                    <span class="line line2"></span>
                                    <span class="line line3"></span>
                                </div>
                                <ul class="menu-items">
                                    <li><a href="/additem">Add Item</a></li>
                                    <li><a href="/itemlist">View Item</a></li> &nbsp; &nbsp; &nbsp; &nbsp;
                                    <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} /> &nbsp;
                                    <Dropdown menu={{ items }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <span> {fullName} <DownOutlined /> </span>
                                        </a>
                                    </Dropdown> &nbsp; &nbsp; &nbsp;
                                    <MenuOutlined onClick={showDrawer} style={{ color: 'black', backgroundColor: 'none !important', marginTop: '5px', fontWeight: 'bolder' }} />
                                    <Drawer title="Admin Dashboard" placement="right" onClose={onClose} open={open}>
                                        <p><Link to="/">Dashboard</Link></p>
                                    </Drawer>
                                </ul>
                                <h1 class="logo"><Link to ="/">Amazon Lite</Link></h1>
                            </div>
                        </nav>
                    ) : null}

                    {userRole === 'user' ? (
                        <nav class="navbar" id="navbar">
                            <div class="navbar-container container">
                                <input type="checkbox" name="" id="" />
                                <div class="hamburger-lines">
                                    <span class="line line1"></span>
                                    <span class="line line2"></span>
                                    <span class="line line3"></span>
                                </div>
                                <ul class="menu-items">
                                    <span style={{ marginTop: '-6px', fontSize: '15px', color: 'red', fontWeight: 'bold' }}>{cartItem}</span>
                                    <Link to ="/cartdetails"><ShoppingCartOutlined style={{ fontWeight: 'bolder', fontSize: '30px', color: 'green' }} /></Link>                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} /> &nbsp;
                                    <Dropdown menu={{ items }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <span> {fullName} <DownOutlined /> </span>
                                        </a>
                                    </Dropdown>
                                </ul>

                                <h1 class="logo"><Link to ="/">Amazon Lite</Link></h1>
                                <form className='search'>
                                    <input type="search" placeholder='search' className='form-control'></input>
                                </form>
                            </div>
                        </nav>
                    ) : null}
                </div>
                : null
            }
        </>
    )
}
export default Navigation;