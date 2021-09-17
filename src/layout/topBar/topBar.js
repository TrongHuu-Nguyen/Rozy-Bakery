import {
    ShopOutlined, FileTextOutlined,
    HomeOutlined, UnorderedListOutlined,
    ShoppingCartOutlined, UserOutlined,
    MenuOutlined, OrderedListOutlined,
    CloseOutlined, LogoutOutlined,
    ContactsOutlined
} from '@ant-design/icons'
import _ from 'lodash'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import './topBar.css'
import React from 'react'
import CartItem from './cartItem/cartItem'
import {useSelector,useDispatch} from 'react-redux'
import {addItem} from '../../slice/userSlice'

const TopBar = () => {
    const [isShow, setIsShow] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [isLogIn, setIsLogIn] = React.useState(false);
    const countCart = useSelector(state=>state.user.cart.length);
    const Cart=useSelector(state=>state.user.cart);
    const [currentUser, setCurrentUser] = React.useState("Login");
    let user = [];
    const dispatch = useDispatch();
    const userCartType=_.countBy(Cart,Math.floor);

    const checkLogin = () => {
        user = JSON.parse(localStorage.getItem("currentUser"));
        if (!!user) {
            setCurrentUser(() => user.userId);
            setIsLogIn(() => true);
            dispatch(addItem(user.userCart));
        } else {
            setCurrentUser(() => "Login");
            setIsLogIn(() => false);
        }
    };

    React.useEffect(() => {
        checkLogin();
    }, [isLogIn]);

    const logOut = () => {
        setIsLogIn(() => false);
        localStorage.removeItem("currentUser");
    };

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
                            <li onClick={showCart}><ShoppingCartOutlined />
                                <div className="CartUpdate" >
                                    <p>{countCart}</p>
                                </div>
                            </li>
                            <li>
                                <UserOutlined /> 
                                <Link to="/login"><p className="currentUser">{currentUser}</p></Link>
                                {isLogIn ? <ul>
                                    <li><p><ContactsOutlined style={{ fontSize: "16px" }} />&nbsp;&nbsp;My Account</p></li>
                                    <li><p><OrderedListOutlined style={{ fontSize: "16px" }} />&nbsp;&nbsp;My WishList</p></li>
                                    <li><p onClick={logOut}><LogoutOutlined style={{ fontSize: "16px" }} />&nbsp;&nbsp;Logout</p></li>
                                </ul> : null}
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className={isShow ? "SideMenuBackground Show" : "SideMenuBackground"} onClick={(e) => { exitSideMenu(e) }}>
                <div className="SideMenu" onClick={(e) => { e.stopPropagation(); }}>
                    <div className="SideMenuTop" onClick={(e) => { e.stopPropagation(); }}>
                        <ul>
                            <Link to="/login"><li><UserOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;<p style={{ fontSize: "24px" }}>{currentUser}</p></li></Link>
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
            {isLogIn ?
                <div className={visible ? "ProductCartBackground Show" : "ProductCartBackground"} onClick={(e) => { closeCart(e) }}>
                    <div className="ProductCart" onClick={(e) => { e.stopPropagation(); }}>
                        <div className="ProductCartTitle" onClick={(e) => { e.stopPropagation(); }}>
                        
                            <div className="TitleContent">
                                <CloseOutlined style={{ fontSize: "32px" }} onClick={(e) => { closeCart(e) }} />
                                <p><ShoppingCartOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;SHOPPING CART</p>
                            </div>
                        </div>
                        <div className="ProductCartItems" onClick={(e) => { e.stopPropagation(); }} >
                            {Object.entries(userCartType).map(([key,value])=>{ 
                                return <CartItem
                                    itemId={key}
                                    itemNumb={value}
                                />
                            })}
                        </div>
                        <div className="ProductCartTotal" onClick={(e) => { e.stopPropagation(); }}>
                            <div className="TotalDetail">
                                <p>Total</p><h2>$0.00</h2>
                            </div>
                            <div className="TotalBtn">
                                <button className="CheckoutBtn"><p><ShoppingCartOutlined style={{ fontSize: "24px" }}/>&nbsp;&nbsp;CHECKOUT</p></button>
                                <button className="BuyMoreBtn"><p><ShopOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;BUY MORE</p></button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

        </div>
    )
}
export default TopBar