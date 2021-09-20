import {ShopOutlined,ShoppingCartOutlined,CloseOutlined} from '@ant-design/icons'
import CartItem from './cartItem/cartItem'
import './productCart.css'


const ProductCart = (props) => {
    const { visible,total,margin,userCartType,closeCart,listProduct,} = props;
    return (
            <div className={visible ? "ProductCartBackground Show" : "ProductCartBackground"} onClick={(e) => {closeCart(e) }}>
                <div className="ProductCart" onClick={(e) => { e.stopPropagation(); }}>
                    <div className="ProductCartTitle" onClick={(e) => { e.stopPropagation(); }}>

                        <div className="TitleContent">
                            <CloseOutlined style={{ fontSize: "32px" }} onClick={(e) => {closeCart(e) }} />
                            <p><ShoppingCartOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;SHOPPING CART</p>
                        </div>
                    </div>
                    <div className="ProductCartItems" onClick={(e) => { e.stopPropagation(); }} >
                        {!!listProduct.length && Object.entries(userCartType).map(([key, value]) => {
                            return <CartItem
                                key={key}
                                item={listProduct.find(item => item.id === key)}
                                countItem={value}
                            />
                        })}
                    </div>
                    <div className="ProductCartTotal" onClick={(e) => { e.stopPropagation(); }}>
                        <div className="TotalDetail">
                            {/* <p>Discount</p><h2>${margin}</h2> */}
                            <p>Total</p><h2>${total}</h2>
                        </div>
                        <div className="TotalBtn">
                            <button className="CheckoutBtn"><p><ShoppingCartOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;CHECKOUT</p></button>
                            <button className="BuyMoreBtn"><p><ShopOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;BUY MORE</p></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProductCart