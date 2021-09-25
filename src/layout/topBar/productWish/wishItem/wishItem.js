import './cartItem.css'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setCartUserAPI } from '../../../../slice/userSlice'
import { setItem } from '../../../../slice/cartSlice'

import React from 'react'

const WishItem = (props) => {
    const { item, countItem } = props;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();

   
    const removeItem = () => {
        // const newCart = currentUser.userCart.filter(idItem => idItem !== item.id);
        // currentUser.userCart = newCart;
        // localStorage.setItem("currentUser", JSON.stringify(currentUser))
        // const payload = {
        //     id: currentUser.id,
        //     idItems: currentUser.userCart
        // }
        // dispatch(setItem(currentUser.userCart));
        // dispatch(setCartUserAPI(payload));
    }
    return (
        <div className="CartItem">
            <div className="Image">
                <img src={item.src} alt="ItemImage" />
            </div>
            <div className="Detail">
                <div className="Title">
                    <h3>{item.title}</h3>
                </div>
                <div className="Descrip">
                    <h3 style={{ color: "gray" }}>${item.description}</h3>
                </div>
                <div className="Price">
                    <h3 style={{ color: "#FF514E" }}>${item.price}</h3>
                </div>
            </div>
            <div className="DeleteBtn">
                <button onClick={removeItem}><DeleteOutlined /></button>
            </div>
        </div>
    )
}
export default WishItem