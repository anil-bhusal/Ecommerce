import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import '../components/style/adminNav.css'
import { useDispatch, useSelector } from "react-redux"
import { setUserDetailsNull } from '../reducers/userSlice'
import { useNavigate, Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';

const Navigation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { fullName, userRole } = useSelector(state => state.user)

    const [open, setOpen] = useState(false);
    const handleMenuClick = (e) => {
        if (e.key === '3') {
            setOpen(false);
        }
    };
    const handleOpenChange = (flag) => {
        setOpen(flag);
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
    
    return (
        <>
            {userRole ?
                <div>
                    {userRole === 'admin' ? (
                        <nav class="navbar">
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
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    /> &nbsp;
                                    <Dropdown
                                        menu={{
                                            items,
                                            onClick: handleMenuClick,
                                        }}
                                        onOpenChange={handleOpenChange}
                                        open={open}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                {fullName}
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>

                                </ul>
                                <h1 class="logo">Amazon Lite</h1>
                            </div>
                        </nav>
                    ) : null}
                    :
                    {userRole === 'user' ? (
                        <nav class="navbar">
                            <div class="navbar-container container">
                                <input type="checkbox" name="" id="" />
                                <div class="hamburger-lines">
                                    <span class="line line1"></span>
                                    <span class="line line2"></span>
                                    <span class="line line3"></span>
                                </div>
                                <ul class="menu-items">&nbsp; &nbsp; &nbsp; &nbsp;
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    /> &nbsp;
                                    <Dropdown
                                        menu={{
                                            items,
                                            onClick: handleMenuClick,
                                        }}
                                        onOpenChange={handleOpenChange}
                                        open={open}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                {fullName}
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>

                                </ul>
                                <h1 class="logo">Amazon Lite</h1>
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