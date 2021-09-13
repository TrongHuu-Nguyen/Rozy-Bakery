import './cardItem.css'
import { Rate } from 'antd';
import { Link } from "react-router-dom"
import { addWish, addCart } from './services/services';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const CardItem = (props) => {
    const { src, alt, title, description, rate, price, displayStyle, id } = props;
    return (
        <div className={displayStyle} >
            <div className="ProductImage">
                <div className="Cart-Wish">
                    <div className="Wish" onClick={() => addWish(id)}><HeartOutlined style={{ fontSize: "18px" }} /></div>
                    <div className="Cart" onClick={() => addCart(id)}><ShoppingCartOutlined style={{ fontSize: "18px" }} /></div>
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