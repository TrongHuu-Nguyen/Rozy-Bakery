import _ from 'lodash'
import 'antd/dist/antd.css';
import './topBar.css'
import React from 'react'
import ProductCart from './productCart/productCart';
import ProductWish from './productWish/productWish';

import { useSelector, useDispatch } from 'react-redux'
import { getProductCartAPI,setItem  } from '../../slice/cartSlice'

import SideMenu from './sideMenu/sideMenu';

import TopMenu from './topMenu/topMenu';

const TopBar = () => {
    const [isShow, setIsShow] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [isLogIn, setIsLogIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState("Login");
    let user = [];

    const dispatch = useDispatch();
    const Cart = useSelector(state => state.cart.cart);
    const countCart = useSelector(state => state.cart.cart.length);
    const userCartType = _.countBy(Cart, Math.floor);
    const listProduct = useSelector(state => state.cart.list);
    const total = useSelector(state => state.cart.total);
    
    const checkLogin = () => {
        user = JSON.parse(localStorage.getItem("currentUser"));
        if (!!user) {
            setCurrentUser(() => user.userId);
            setIsLogIn(() => true);
            dispatch(setItem(user.userCart));
        } else {
            setCurrentUser(() => "Login");
            setIsLogIn(() => false);
        }
    };

    React.useEffect(() => {
        checkLogin();
        dispatch(getProductCartAPI());
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
            <TopMenu
                countCart={countCart}
                isLogIn={isLogIn}
                logOut={logOut}
                showCart={showCart}
                currentUser={currentUser}
                showSideMenu={showSideMenu}
            />

            <SideMenu
                isShow={isShow}
                exitSideMenu={exitSideMenu}
                currentUser={currentUser}
            />

            {isLogIn ?
                <ProductCart
                    cart={Cart}
                    visible={visible}
                    total={total}
                    userCartType={userCartType}
                    closeCart={closeCart}
                    listProduct={listProduct}
                /> : null}


            {isLogIn ?
                <ProductWish
                    cart={Cart}
                    visible={visible}
                    total={total}
                    userCartType={userCartType}
                    closeCart={closeCart}
                    listProduct={listProduct}
                /> : null}

        </div>
    )
}
export default TopBar