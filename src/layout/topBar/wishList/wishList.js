import './wishList.css'
import { ExportOutlined, LikeOutlined } from '@ant-design/icons'
import WishItem from './wishItem/wishItem'



const WishList = (props) => {
    const { isShowWish, userWishType, closeWishList, listProduct } = props;
    
    return (
        <div className={isShowWish ? "WishList showWishList" : "WishList"}>
            <div className="WishListTittle">
                <div><LikeOutlined style={{ fontSize: "20px" }} /><p>Your favorite</p></div>
                <ExportOutlined style={{ fontSize: "20px" }} onClick={() => closeWishList()} />
            </div>
            <div className="WishListContainer">
                {!!listProduct.length && userWishType.forEach(key => {
                    return <WishItem
                        key={key}
                        item={listProduct.find(item => item.id === key)}
                    />
                })}
            </div>
        </div>
    )
}
export default WishList