import { ExportOutlined, LikeOutlined } from '@ant-design/icons'
import { useDispatch,useSelector } from 'react-redux'
import OrderItem from './orderItem/orderItem'
import './userOrder.css'
import emtyCart from '../../../asset/emtyCart.png'
import {orderList} from '../../../slice/cartSlice'
import React from 'react'



const UserOrder=(props)=>{
    const {isShowOrder,closeOrder}=props;
    const userOrder=useSelector(state=>state.cart.orderList);
    const dispatch=useDispatch();

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (!!user) {
            dispatch(orderList(user.userOrder));
        } else {
            dispatch(orderList([]));
        }
    }, []);

    return(
        <div className={isShowOrder?"UserOrder ShowOrderList" : "UserOrder"}>
            <div className="UserOrderTitle">
            <div><LikeOutlined style={{ fontSize: "20px" }} /><p>Your order</p></div>
                <ExportOutlined style={{ fontSize: "20px" }} onClick={closeOrder} />
            </div>
            <div className="UserOrderContainer">
                {!!userOrder.length?userOrder.map((item)=>{
                    return <OrderItem
                    key={item.id}
                    item={item}
                    />
                }):<img 
                src={emtyCart} 
                alt="emty-cart"
                style={{marginTop:"50px"}}
                />
            }
            </div>

        </div>
    )
}
export default UserOrder