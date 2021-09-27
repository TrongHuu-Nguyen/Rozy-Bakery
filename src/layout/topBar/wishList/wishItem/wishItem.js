import './wishItem.css'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { wishItem } from '../../../../slice/cartSlice'
import { setWishUserAPI } from '../../../../slice/userSlice'
import { Link } from 'react-router-dom'


const WishItem = (props) => {
    const { item } = props;
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
        dispatch(wishItem(currentUser.userWish));
        dispatch(setWishUserAPI(payload));
    }
    return (
        <div className="WishItem">
            <div className="Image">
                <img src={item.src} alt="ItemImage" />
            </div>
            <div className="Detail">
                <div className="Title">
                    <Link className="ProductTitleLink" style={{ textDecoration: 'none' }} to={`/product-detail?name=${item.title}&id=${item.id}`}>
                        <h3>{item.title}</h3>
                    </Link>

                </div>
                <div className="Description">
                    <h3>{item.description}</h3>
                </div>
                <div className="Price">
                    <h3>${item.price}</h3>
                </div>
            </div>
            <div className="DeleteBtn" onClick={removeItem}>
                <button><DeleteOutlined /></button>
            </div>
        </div>
    )
}
export default WishItem