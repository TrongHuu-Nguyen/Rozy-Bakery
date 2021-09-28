
import { DeleteOutlined, CarryOutOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { orderList } from '../../../../slice/cartSlice'
import { setUserOrderAPI } from '../../../../slice/userSlice'
import './orderItem.css'



const OrderItem = (props) => {

    const { item } = props;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();

    const removeItem = () => {
        const newOrderList = currentUser.userOrder.filter(idItem => idItem.id !== item.id);
        currentUser.userOrder = newOrderList;
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        const payload = {
            id: currentUser.id,
            userOrder: currentUser.userOrder
        }
        dispatch(orderList(currentUser.userOrder));
        dispatch(setUserOrderAPI(payload));
    }
    return (
        <div className="OrderItem">
            <div className="OrderItemImg">
                <CarryOutOutlined style={{fontSize:"36px"}}/>
            </div>
            <div className="OrderItemContent">
                <p>value : {item.cost}$</p>
                <p>status: {item.status}</p>
            </div>
            <div className="OrderItemDelete" onClick={removeItem}>
                <DeleteOutlined style={{fontSize:"24px"}}/>
            </div>
        </div>
    )
}
export default OrderItem