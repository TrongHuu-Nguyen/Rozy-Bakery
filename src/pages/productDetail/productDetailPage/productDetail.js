import React from 'react'
// import ProductData from '../../../fakedata.js'
import _ from 'lodash'
import { useLocation, useHistory } from "react-router-dom"
import { Image, Rate, Radio, Tabs } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './productDetail.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProductAPI } from '../../../slice/productSlice'
import Comment from '../../productDetail/Comment/comment';
import CardItem from '../../../components/cardItem/cardItem'
import Footer from '../../../layout/footer/footer'
import Header from '../../../layout/header/header.js'
import TopBar from '../../../layout/topBar/topBar.js'
import Shipping from './shipping/shipping'

const { TabPane } = Tabs;
const ProductDetail = () => {
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState(1);
    const [count, setCount] = React.useState(0);
    const [currentItem, setCurrentItem] = React.useState({});
    const [commentNumb, setCommentNumb] = React.useState(0);
    const [relativeItem, setRelativeItem] = React.useState([]);

    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.products.list);
    
    const location = useLocation();
    const history = useHistory();
    const queryItem = new URLSearchParams(location.search);
    const itemId = queryItem.get("id");
    const itemTitle = queryItem.get("name");


    // const isLoading=useSelector((state) => state.products.loading);
    
    // let queryProduct = [];
    // let currentItem = null;
    // let commentNumb = 0;
    // const relativeItems = [];
    // const relativeItem = [];


    React.useEffect(() => {
        window.scrollTo(0, 200);
        dispatch(getProductAPI());
    }, [dispatch])

    React.useEffect(() => {
        if (listProduct && listProduct.length && itemId) {
            const product = listProduct.find(item => item.id === itemId);
            if (!product) {
                history.push('/product');
            }
            // const currentItem = queryProduct[0];
            const commentNumbTemp = product.comments.length;
            const relativeItems = listProduct.filter(item => item.type === product.type)
            const relativeItemTemp = _.sampleSize(relativeItems, 5);
            setCurrentItem(product);
            setCommentNumb(commentNumbTemp);
            setRelativeItem(relativeItemTemp);
        }
    }, [listProduct, itemId])

    
    

    const descrease = () => {
        setCount(count - 1);
        setValue(count - 1);
        if (count <= 0) {
            setCount(0)
            setValue(0);
        }
    }
    const increase = () => {
        setCount(count + 1);
        setValue(count + 1);
    }
    const onChange = e => {
        setValue(e.target.value);
        setCount(e.target.value);
    };
    return (
        <div className="ProductDetail">
            <TopBar />
            <Header title={itemTitle} />
            <div className="ProductDetailBody">
                <div className="ProductMainContent">
                    <div className="ProductImages">
                        <Image
                            preview={{ visible: false }}
                            src={currentItem.src}
                            onClick={() => setVisible(true)}
                        />
                        <div style={{ display: 'none' }}>
                            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                <Image src={currentItem.src} />
                            </Image.PreviewGroup>
                        </div>
                    </div>
                </div>
                <div className="ProductFullDetail">
                    <h1>{currentItem.title}</h1>
                    <div className="ProductRate-Comment">
                        <Rate disabled defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;<p> {commentNumb} Customer Reviews </p>
                    </div>
                    <h2>${currentItem.price}</h2>
                    <h3>Choose your options</h3>
                    <div className="DiscountOption">
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={2} style={{ fontSize: "16px", fontWeight: "500" }}>Buy 2 get 10 percent off</Radio ><br />
                            <Radio value={3} style={{ fontSize: "16px", fontWeight: "500" }}>Buy 3 get 15 percent off</Radio><br />
                            <Radio value={4} style={{ fontSize: "16px", fontWeight: "500" }}>Buy 4 get 20 percent off</Radio><br />
                            <Radio value={5} style={{ fontSize: "16px", fontWeight: "500" }}>Buy 5 or up to get 25 percent off</Radio><br />
                        </Radio.Group>
                    </div>
                    <div className="AddCart">
                        <div className="Increase-Decrease">
                            <div className="DecreaseButton FakeBtn" onClick={descrease}><p>-</p></div><p>{count}</p><div className="IncreaseButton FakeBtn" onClick={increase}><p>+</p></div>
                        </div>
                        <div className="AddCardButton">
                            <ShoppingCartOutlined /><p> ADD TO CART</p>
                        </div>
                        <div className="WishIcon FakeBtn"><HeartOutlined style={{ fontSize: "18px" }} /></div>
                    </div>
                    <Shipping />
                </div>
            </div>
            <div className="ProductFullDescription">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Description" key="1">
                        <p>{currentItem.description}</p>
                    </TabPane>
                    <TabPane tab="Reviews" key="2">
                        <Comment itemId={itemId} />
                    </TabPane>
                </Tabs>
            </div>
            <div className="ProductRelate">
                <div className="ProductRelateTitle">
                    <p>Related Products</p>
                </div>

                <div className="ProductRelateList">
                    {relativeItem.map((item) => {
                        return (
                            <CardItem
                                displayStyle={"CardItemContentGrid"}
                                title={item.title}
                                key={item.id}
                                id={item.id}
                                src={item.src}
                                alt={item.alt}
                                price={item.price}
                                rate={item.rate}
                                description={item.description}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ProductDetail