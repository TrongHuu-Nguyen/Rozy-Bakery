import './cardItem.css'
import { Rate } from 'antd';
import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import {useDispatch,useSelector} from 'react-redux'
import {getUserAPI,addCartUserAPI,addItem} from '../../slice/userSlice'

const CardItem = (props) => {
    // const checkCart=useSelector(state=>state.user.cart);
    // console.log(checkCart);
    // const updateCart=[...checkCart]
    const dispatch = useDispatch();
    const { src, alt, title, description, rate, price, displayStyle, id } = props;
    
    const addToCart=(idItem)=>{
        const currentUser=JSON.parse(localStorage.getItem("currentUser"));
        if(!currentUser)return;
        if(currentUser){
            currentUser.userCart.push(idItem);
            localStorage.setItem("currentUser",JSON.stringify(currentUser));
            const payload={
                id:currentUser.id,
                idItems:currentUser.userCart
            }
            // updateCart.push(idItem);
            dispatch(addItem(currentUser.userCart));
            dispatch(addCartUserAPI(payload));
            dispatch(getUserAPI());
        }
    }

    const addToWish=(idItem)=>{

    }

    return (
        <div className={displayStyle} >
            <div className="ProductImage">
                <div className="Cart-Wish">
                    <div className="Wish" onClick={() => addToWish(id)}><HeartOutlined style={{ fontSize: "18px" }} /></div>
                    <div className="Cart" onClick={() => addToCart(id)}><ShoppingCartOutlined style={{ fontSize: "18px" }} /></div>
                </div>
                <LazyLoadImage alt={alt} src={src} effect="blur" className="Image"/>
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