import './listProduct.css'
import CartItem from '../../../layout/topBar/productCart/cartItem/cartItem'
import _ from 'lodash'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProductCartAPI } from '../../../slice/cartSlice'
import { setTotalCart } from '../../../slice/cartSlice'
import calculateDiscount from '../../..//layout/topBar/services/calculateDiscount'




const ListProduct = (props) => {
    const dispatch = useDispatch();
    const Cart = useSelector(state => state.cart.cart);
    // const countCart = useSelector(state => state.cart.cart.length);
    const userCartType = _.countBy(Cart, Math.floor);
    const listProduct = useSelector(state => state.cart.list);
    const total = useSelector(state => state.cart.total);
    
    const [discountPercent, setDiscountPercent] = React.useState(0); //Discount Percent
    const [discountValue, setDiscountValue] = React.useState(0); //Discount
    const [invoice, setInvoice] = React.useState(0); //Discount

    React.useEffect(() => {
        dispatch(getProductCartAPI());
    }, []);

    React.useEffect(() => {
        
        if (Cart.length>0&&listProduct.length>0) {
            let sum = 0;
            let count = 0;
            Cart.map((id) => {
                sum += parseInt(listProduct.find(item => item.id === id).price);
                count += 1;
                return sum
            });
            setInvoice(()=>sum)
            setDiscountPercent(calculateDiscount(count))
            const discount = (sum * discountPercent ).toFixed(2);
            setDiscountValue(() => discount)
            const finalTotal = sum - discount;
            dispatch(setTotalCart(finalTotal));
        }else return
    }, [Cart,listProduct,dispatch]);




    return (
        <div className="ListProductContainer" >
            <div className="ListProduct" >
                <div className="CartItems" >
                    {!!listProduct.length && Object.entries(userCartType).map(([key, value]) => {
                            return <CartItem
                                key={key}
                                item={listProduct.find(item => item.id === key)}
                                countItem={value}
                            />
                        })}
                </div>
                <div className="CartDetail">
                    <div>
                        <p>bill invoice</p> <h2>${invoice}</h2>
                    </div>
                    <div>
                        <p>Discount percentage</p> <h2>{discountPercent*100}%</h2>
                    </div>
                    <div>
                        <p>Discount value</p> <h2>${discountValue}</h2>
                    </div>
                    <div>
                        <p>Shipping Cost</p> <h2>Free</h2>
                    </div>
                    <div>
                        <p>Taxes (estimated)</p> <h2>$0</h2>
                    </div>

                </div>
                <div className="CartTotal">
                    <p>Total</p><h2>${total}</h2>
                </div>
            </div>
        </div>
    )
}

export default ListProduct