import { Rate } from 'antd';
import {Link} from "react-router-dom"
import {HeartOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import './cardItem.css'
import _ from 'lodash'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardItem=(props)=>{
    const{src,alt,title,description,rate,price,displayStyle,id}=props;
    const userAccount=JSON.parse(localStorage.getItem("userAccount"));
    const addCart=()=>{
        const currentUser=JSON.parse(localStorage.getItem("currentUser"));
        if(!currentUser)return;
        if(currentUser){
            currentUser.userCart.push(id);
            localStorage.setItem("currentUser",JSON.stringify(currentUser));
            const currentIndex = _.findIndex(userAccount, ['userId', currentUser.userId]);
            userAccount[currentIndex]=currentUser;
            localStorage.setItem("userAccount",JSON.stringify(userAccount));
        }
    };

    const addWish=()=>{
        const currentUser=JSON.parse(localStorage.getItem("currentUser"));
        if(!currentUser)return;
        if(currentUser){
            currentUser.userWish.push(id);
            localStorage.setItem("currentUser",JSON.stringify(currentUser));
            const currentIndex = _.findIndex(userAccount, ['userId', currentUser.userId]);
            userAccount[currentIndex]=currentUser; 
            localStorage.setItem("userAccount",JSON.stringify(userAccount));
        }
    };


    return(
            <div className={displayStyle} >
                <div className="ProductImage">
                    <div className="Cart-Wish">
                        <div className="Wish" onClick={addWish}><HeartOutlined style={{fontSize:"18px"}}/></div>
                        <div className="Cart" onClick={addCart}><ShoppingCartOutlined style={{fontSize:"18px"}}/></div>
                    </div>
                    <LazyLoadImage
                    alt={alt}
                    src={src}
                    effect="blur"
                    className="Image"
                    />
                </div>
                <div className="CardItemInfo">
                    <div className="ProductTitle">
                        <Link className="ProductTitleLink" style={{ textDecoration: 'none' }} to={`/product-detail?name=${title}&id=${id}`}><p>{title}</p></Link>
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