import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast,faClock,faTags } from '@fortawesome/free-solid-svg-icons'
import { Image,Rate,Radio,Tabs } from 'antd';
import {HeartOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import './productDetail.css'
import Comment from '../../components/comment/comment';

const { TabPane } = Tabs;

const ProductDetail =()=>{
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return(
        <div className="ProductDetail">
            <div className="ProductDetailBody">
                    <div className="ProductMainContent">
                        <div className="ProductImages">
                            <Image
                                preview={{ visible: false }}
                                
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                onClick={() => setVisible(true)}
                            />
                            <div style={{ display: 'none' }}>
                            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                            <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                            <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                            </Image.PreviewGroup>
                            </div>
                        </div>
                    </div>
                    <div className="ProductFullDetail">
                        <h1>Product Title</h1>
                        <div className="ProductRate-Comment">
                        <Rate disabled defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;<p> 5 Customer Reviews </p>
                        </div>
                        <h2>$Price</h2>
                        <h3>Choose your options</h3>
                        <div className="DiscountOption">
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1} style={{fontSize:"16px",fontWeight:"500"}}>Buy 2 get 10 percent off</Radio ><br/>
                            <Radio value={2} style={{fontSize:"16px",fontWeight:"500"}}>Buy 3 get 15 percent off</Radio><br/>
                            <Radio value={3} style={{fontSize:"16px",fontWeight:"500"}}>Buy 4 get 20 percent off</Radio><br/>
                            <Radio value={4} style={{fontSize:"16px",fontWeight:"500"}}>Buy 5 or up to get 25 percent off</Radio><br/>
                        </Radio.Group>
                        </div>
                        <div className="AddCart">
                            <div className="Increase-Decrease">
                                <div className="DecreaseButton FakeBtn"><p>-</p></div><p>0</p><div className="IncreaseButton FakeBtn"><p>+</p></div>
                            </div>
                            <div className="AddCardButton">
                                <ShoppingCartOutlined/><p> ADD TO CART</p>
                            </div>
                            <div className = "WishIcon FakeBtn"><HeartOutlined style={{fontSize:"18px"}}/></div>
                            
                        </div>
                        <div className="Shipping">
                            <div className="ShipPolicy">
                                <div className="PolicyIcon" ><FontAwesomeIcon icon={faShippingFast} size="lg" style={{color:"#FF514E"}} /></div>
                                <p>Free global shipping on all orders</p>
                            </div>
                            <div className="ShipPolicy">
                                <div className="PolicyIcon"><FontAwesomeIcon icon={faClock} size="lg" style={{color:"#FF514E"}} /></div><p>2 hours easy returns if you change your mind</p>
                                </div>
                            <div className="ShipPolicy">
                                <div className="PolicyIcon"><FontAwesomeIcon icon={faTags} size="lg" style={{color:"#FF514E"}} /></div><p>Order before noon for same day dispatch</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="ProductFullDescription">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Description" key="1">
                    This is Description
                    </TabPane>
                    <TabPane tab="Reviews" key="2">
                    <Comment/>
                    </TabPane>
                </Tabs>
            </div>



            <div className="ProductRelate"></div>
            </div>
    )
}
export default ProductDetail