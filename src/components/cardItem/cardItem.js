import './cardItem.css'
import { Rate, notification } from 'antd';
import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setCartUserAPI, setWishUserAPI } from '../../slice/userSlice'
import { setItem, wishItem } from '../../slice/cartSlice'

const addWish = type => {
    notification.success({
        message: 'Success !',
        description:
            'The product has been added to your favorites.',
    });
};

const addCart = type => {
    notification.success({
        message: 'Success !',
        description:
            'The product has been added to your cart.',
    });
};

const warning = type => {
    notification.warning({
        message: 'Warning !',
        description:
            'You must be login to do this.',
    });
};

const CardItem = (props) => {
    const dispatch = useDispatch();
    const { src, alt, title, description, rate, price, displayStyle, id } = props;

    const addToCart = (idItem) => {

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            warning();
            return;
        }
        if (currentUser) {
            addCart();
            currentUser.userCart.push(idItem);
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            const payload = {
                id: currentUser.id,
                idItems: currentUser.userCart
            }
            dispatch(setItem(currentUser.userCart));
            dispatch(setCartUserAPI(payload));
        }
    }

    const addToWish = (idItem) => {

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            warning();
            return;
        }
        if (currentUser) {
            addWish();
            currentUser.userWish.push(idItem);
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            const payload = {
                id: currentUser.id,
                idItems: currentUser.userWish
            }
            dispatch(wishItem(currentUser.userWish));
            dispatch(setWishUserAPI(payload));
        }
    }

    return (
        <div className={displayStyle} >
            <div className="ProductImage">
                <div className="Cart-Wish">
                    <div className="Wish" onClick={() => addToWish(id)}><HeartOutlined style={{ fontSize: "18px" }} /></div>
                    <div className="Cart" onClick={() => addToCart(id)}><ShoppingCartOutlined style={{ fontSize: "18px" }} /></div>
                </div>
                <LazyLoadImage alt={alt} src={src} effect="blur" className="Image" />
            </div>
            <div className="CardItemInfo">
                <div className="ProductTitle">
                    <Link className="ProductTitleLink" style={{ textDecoration: 'none' }} to={`/product-detail?name=${title}&id=${id}`}>
                        <p>{title}</p>
                    </Link>
                </div>
                <div className="ProductDescription">
                    <p>{description}</p>
                </div>
                <div className="ProductRate">
                    <Rate disabled defaultValue={rate} />
                </div>
                <div className="ProductPrice">
                    <p>{price}$</p>
                </div>
            </div>
        </div>
    )
}
export default CardItem