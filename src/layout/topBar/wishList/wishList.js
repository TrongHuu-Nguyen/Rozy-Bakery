import './wishList.css'
import { ExportOutlined, LikeOutlined } from '@ant-design/icons'
import WishItem from './wishItem/wishItem'
import emtyCart from '../../../asset/emtyCart.png'



const WishList = (props) => {
    const { isShowWish, userWishType, closeWishList, listProduct } = props;
    
    return (
        <div className={isShowWish ? "WishList showWishList" : "WishList"}>
            <div className="WishListTittle">
                <div><LikeOutlined style={{ fontSize: "20px" }} /><p>Your favorite</p></div>
                <ExportOutlined style={{ fontSize: "20px" }} onClick={() => closeWishList()} />
            </div>
            <div className="WishListContainer">
                {!!listProduct.length && userWishType.length? userWishType.map(key => {
                    return <WishItem
                        key={key}
                        item={listProduct.find(item => item.id === key)}
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
export default WishList