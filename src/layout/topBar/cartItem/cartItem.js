import './cartItem.css'

const CartItem = (props) => {
    return (
        <div className="CartItem">
            <div className="CartItemDetail">
                <div className="ItemImage">
                    <img src={props.src} alt="ItemImage" />
                </div>
                <div className="ItemTitle">
                    <h3>{props.title}</h3>
                </div>
                <div className="ItemPrice">
                    <h3>{props.price}</h3>
                </div>
            </div>
            <div className="CartItemCustom"></div>

        </div>
    )
}
export default CartItem