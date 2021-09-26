import './wishItem.css'
import {DeleteOutlined} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {wishItem} from '../../../../slice/cartSlice'
import {setWishUserAPI} from '../../../../slice/userSlice'


const WishItem =(props)=>{
    const {item} = props;
    console.log(item)
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();

    const removeItem = () => {
        const newWishList = currentUser.userWish.filter(idItem => idItem !== item.id);
        currentUser.userWish = newWishList;
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        const payload = {
            id: currentUser.id,
            idItems: currentUser.userWish
        }
        dispatch(wishItem(currentUser.userCart));
        dispatch(setWishUserAPI(payload));
    }


    return(
        <div className="WishItem">
            <div className="Image">
                <img src={item.src} alt="ItemImage" />
            </div>
            <div className="Detail">
                <div className="Title">
                    <h3>{item.title}</h3>
                </div>
                <div className="Description">
                    <h3>{item.title}</h3>
                </div>
                <div className="Price">
                    <h3 style={{ color: "#FF514E" }}>${item.price}</h3>
                </div>
            </div>
            <div className="DeleteBtn" onClick={removeItem}>
                <button><DeleteOutlined /></button>
            </div>

        </div>
    )
}
export default WishItem