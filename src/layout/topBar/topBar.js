import _ from 'lodash'
import 'antd/dist/antd.css';
import './topBar.css'
import React from 'react'
import ProductCart from './productCart/productCart';
import WishList from './wishList/wishList'

import { useSelector, useDispatch } from 'react-redux'
import { getProductCartAPI, setItem ,wishItem} from '../../slice/cartSlice'

import SideMenu from './sideMenu/sideMenu';

import TopMenu from './topMenu/topMenu';

const TopBar = () => {
    const [isShow, setIsShow] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [isShowWish, setIsShowWish] = React.useState(false);
    const [isLogIn, setIsLogIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState("Login");
    let user = [];

    const dispatch = useDispatch();
    const Cart = useSelector(state => state.cart.cart);
    const wishList = useSelector(state => state.cart.wishList);
    const countCart = useSelector(state => state.cart.cart.length);
    const userCartType = _.countBy(Cart, Math.floor);
    const userWishType = _.unionBy(wishList, Math.floor);
    
    const listProduct = useSelector(state => state.cart.list);
    const total = useSelector(state => state.cart.total);

    const checkLogin = () => {
        user = JSON.parse(localStorage.getItem("currentUser"));
        if (!!user) {
            setCurrentUser(() => user.userId);
            setIsLogIn(() => true);
            dispatch(setItem(user.userCart));
            dispatch(wishItem(user.userWish));
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
    const showWishList = () => {
        setIsShowWish(true);
    };
    const closeWishList = () => {
        setIsShowWish(false);
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
                showWishList={showWishList}
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
                <WishList
                    isShowWish={isShowWish}
                    userWishType={userWishType}
                    closeWishList={closeWishList}
                    listProduct={listProduct}
                /> : null}

        </div>
    )
}
export default TopBar