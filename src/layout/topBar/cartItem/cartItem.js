import './cartItem.css'

const CartItem = (props) => {
    return (
        <div className="CartItem">
            <div className="ItemImage">
                <img src='https://cdn.tgdd.vn/Files/2019/06/11/1172411/video-cach-lam-hamburger-ga-pho-mai-sieu-don-gian-va-ngon-tuyet-voi-tai-nha5.jpg' alt="ItemImage" />
            </div>
            <div className="CartItemDetail">
                <div className="ItemTitle">
                    <h3>tittle</h3>
                </div>
                <div className="ItemPrice">
                    <h3 style={{color:"#FF514E"}}>$49</h3>
                </div>
                <div className="CartItemCustom">
                    <button>+</button>
                    <div>5</div>
                    <button>-</button>
                </div>
            </div>
            <div className="DeleteBtn">
                <button>Del</button>
            </div>

        </div>
    )
}
export default CartItem