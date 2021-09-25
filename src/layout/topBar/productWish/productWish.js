import {CloseOutlined } from '@ant-design/icons'
// import CartItem from './cartItem/cartItem'
import './productWish.css'
import React from 'react'


const ProductWish = (props) => {
    const { cart,visible, total, userCartType, closeCart, listProduct } = props;

    return (
            <div className= {"ProductWish"} onClick={(e) => { e.stopPropagation(); }}>
                <div className="ProductWishTitle" onClick={(e) => { e.stopPropagation(); }}>
                    <h2>YOUR WISHLIST</h2>
                    <div className="TitleContent">
                        <CloseOutlined style={{ fontSize: "32px" }} onClick={(e) => { closeCart(e) }} />
                    </div>
                </div>
                <div className="ProductCartItems" onClick={(e) => { e.stopPropagation(); }} >
                    {/* {!!listProduct.length && Object.entries(userCartType).map(([key, value]) => {
                        return <CartItem
                            key={key}
                            item={listProduct.find(item => item.id === key)}
                            countItem={value}
                        />
                    })} */}
                </div>

            </div>
    )
}
export default ProductWish