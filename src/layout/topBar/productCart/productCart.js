import { ShopOutlined, ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons'
import CartItem from './cartItem/cartItem'
import './productCart.css'
import { Link } from 'react-router-dom'
import React from 'react'
import { setTotalCart } from '../../../slice/cartSlice'
import calculateDiscount from '../services/calculateDiscount'
import { useDispatch } from 'react-redux'
import emtyCart from '../../../asset/emtyCart-2.png'

const ProductCart = (props) => {
    const { cart, visible, total, userCartType, closeCart, listProduct } = props;
    const dispatch = useDispatch();
    const listUserCartType=Object.entries(userCartType);

    React.useEffect(() => {
        let sum = 0;
        let count = 0;
        if (cart.length === 0){
            dispatch(setTotalCart(0));
        }
        if (cart.length > 0 && listProduct.length > 0) {
            cart.map((id) => {
                sum += parseInt(listProduct.find(item => item.id === id).price);
                count += 1;
                return sum
            });
            const discount = (sum * calculateDiscount(count)).toFixed(2);
            const finalTotal = sum - discount;
            dispatch(setTotalCart(finalTotal));
        } else return
    }, [cart, listProduct, dispatch]);

    return (
        <div className={visible ? "ProductCartBackground Show" : "ProductCartBackground"} onClick={(e) => { closeCart(e) }}>
            <div className="ProductCart" onClick={(e) => { e.stopPropagation(); }}>
                <div className="ProductCartTitle" onClick={(e) => { e.stopPropagation(); }}>

                    <div className="TitleContent">
                        <CloseOutlined style={{ fontSize: "32px" }} onClick={(e) => { closeCart(e) }} />
                        <p><ShoppingCartOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;SHOPPING CART</p>
                    </div>
                </div>
                <div className="ProductCartItems" onClick={(e) => { e.stopPropagation(); }} >
                    {!!listProduct.length && listUserCartType.length?listUserCartType.map(([key, value]) => {
                        return <CartItem
                            key={key}
                            item={listProduct.find(item => item.id === key)}
                            countItem={value}
                        />
                    }):<img 
                        src={emtyCart} 
                        alt="emty-cart"
                        style={{marginTop:"50px"}}
                        />
                    }
                </div>
                <div className="ProductCartTotal" onClick={(e) => { e.stopPropagation(); }}>
                    <div className="TotalDetail">
                        <p>Total</p><h2>${total}</h2>
                    </div>
                    <div className="TotalBtn">
                        <Link to="/checkout">
                            <button className="CheckoutBtn"><p><ShoppingCartOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;CHECKOUT</p></button>
                        </Link>
                        <Link to="/product">
                            <button className="BuyMoreBtn"><p><ShopOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;BUY MORE</p></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCart