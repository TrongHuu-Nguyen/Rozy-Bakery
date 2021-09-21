import _ from 'lodash'
import 'antd/dist/antd.css';
import './topBar.css'
import React from 'react'
import ProductCart from './productCart/productCart';
import { useSelector, useDispatch } from 'react-redux'
import { setItem } from '../../slice/userSlice'
import { getProductCartAPI } from '../../slice/cartSlice'
import { setTotalCart } from '../../slice/cartSlice'
import SideMenu from './sideMenu/sideMenu';
import calculateDiscount from './services/calculateDiscount'
import TopMenu from './topMenu/topMenu';

const TopBar = () => {
    const [isShow, setIsShow] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [isLogIn, setIsLogIn] = React.useState(false);
    const countCart = useSelector(state => state.user.cart.length);
    const Cart = useSelector(state => state.user.cart);
    const [currentUser, setCurrentUser] = React.useState("Login");
    let user = [];
    const dispatch = useDispatch();
    const userCartType = _.countBy(Cart, Math.floor);
    const listProduct = useSelector(state => state.cart.list);
    const total = useSelector(state => state.cart.total);
    const [margin, setMargin] = React.useState(0); //Discount price
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
        if (!!Cart) {
            let sum = 0;
            let count = 0;
            Cart.map((id) => {
                sum += parseInt(listProduct.find(item => item.id === id).price);
                count += 1;
                return sum
            });
            const discount = (sum * calculateDiscount(count)).toFixed(2);
            setMargin(() => discount)
            const finalTotal = sum - discount
            dispatch(setTotalCart(finalTotal));
        }
    }, [Cart]);
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
                    visible={visible}
                    total={total}
                    margin={margin}
                    userCartType={userCartType}
                    closeCart={closeCart}
                    listProduct={listProduct}
                /> : null}
        </div>
    )
}
export default TopBar