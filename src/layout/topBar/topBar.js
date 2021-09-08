import {
    ShopOutlined, FileTextOutlined,
    HomeOutlined, UnorderedListOutlined,
    ShoppingCartOutlined, UserOutlined,
    MenuOutlined, OrderedListOutlined, CloseOutlined
} from '@ant-design/icons'

import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import './topBar.css'
import React from 'react'

const TopBar = () => {

    const [isShow, setIsShow] = React.useState(false);
    const [visible, setVisible] = React.useState(false);


    const showCart = () => {

        setVisible(true);
    };
    const closeCart = (e) => {
        e.stopPropagation();
        setVisible(false);
    };

    const showSideMenu = () => {

        setIsShow(true);
    };
    const exitSideMenu = (e) => {
        e.stopPropagation();
        setIsShow(false);
    };
    return (
        <div className="MainMenu">
            <div className="TopBar">
                <div className="NavBar">
                    <div className="TopMenu">
                        <ul>
                            <li><MenuOutlined onClick={(e) => { showSideMenu(e) }} /></li>
                            <li><Link to="/"><p style={{ color: "white" }}><HomeOutlined />&nbsp;Pages</p></Link></li>
                            <li><Link to="/product"><p style={{ color: "white" }}><UnorderedListOutlined />&nbsp;Online Order</p></Link></li>
                            <li><FileTextOutlined />&nbsp;<p>News</p></li>
                            <li><ShopOutlined />&nbsp;<p>Store Location</p></li>
                        </ul>
                    </div>
                    <div className="Cart-User">
                        <ul>
                            <li onClick={showCart}><ShoppingCartOutlined /><div className="CartUpdate" ><p>0</p></div></li>
                            <Link to="/login"><li><UserOutlined /><p style={{ color: "white" }}>Login</p></li></Link>
                        </ul>
                    </div>

                </div>
            </div>
            <div className={isShow ? "SideMenuBackground Show" : "SideMenuBackground"} onClick={(e) => { exitSideMenu(e) }}>
                <div className="SideMenu" onClick={(e) => { e.stopPropagation(); }}>
                    <div className="SideMenuTop" onClick={(e) => { e.stopPropagation(); }}>
                        <ul>
                            <Link to="/login"><li><UserOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;<p>Login</p></li></Link>
                        </ul>
                    </div>
                    <div className="SideMenuBody" onClick={(e) => { e.stopPropagation(); }} >
                        <ul>
                            <li><HomeOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Pages</p></li>
                            <li><UnorderedListOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Online Order</p></li>
                            <li><FileTextOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>News</p></li>
                            <li><ShopOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Store Location</p></li>
                        </ul>
                    </div>
                    <div className="SideMenuBottom" onClick={(e) => { e.stopPropagation(); }}>
                        <ul>
                            <li><OrderedListOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Your Wishlist</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={visible ? "ProductCartBackground Show" : "ProductCartBackground"} onClick={(e) => { closeCart(e) }}>
                <div className="ProductCart" onClick={(e) => { e.stopPropagation(); }}>
                    <div className="ProductCartTitle" onClick={(e) => { e.stopPropagation(); }}>
                        <div className="TitleContent">
                            <CloseOutlined style={{ fontSize: "32px" }} onClick={(e) => { closeCart(e) }} />
                            <p><ShoppingCartOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;SHOPPING CART</p>
                        </div>
                    </div>
                    <div className="ProductCartItems" onClick={(e) => { e.stopPropagation(); }} >

                    </div>
                    <div className="ProductCartTotal" onClick={(e) => { e.stopPropagation(); }}>
                        <div className="TotalDetail">
                            <p>Total</p><h2>$0.00</h2>
                        </div>
                        <div className="TotalBtn">
                            <button className="CheckoutBtn"><ShoppingCartOutlined />&nbsp;&nbsp;CHECKOUT</button>
                            <button className="BuyMoreBtn"><ShopOutlined />&nbsp;&nbsp;BUY MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar