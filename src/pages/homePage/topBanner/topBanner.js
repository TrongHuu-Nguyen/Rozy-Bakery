import { Carousel } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import './topBanner.css'


const TopBanner=()=>{
    return (
        <div className="TopBanner">
            
            <div className="FirstBanner">
                <Carousel autoplay>
                    
                        <div className="BannerBackground FirstBanner1">
                            <div className="BannerContent">
                                <h2>ENJOY YOUR MEAL</h2>
                                <p>Good food is wise <span style={{color:"#FF154E"}}>medicine</span></p>
                                <div className="OrderButton"><ShoppingCartOutlined/><h3>ORDER NOW</h3></div>
                            </div>
                        </div>
                    
                        <div className="BannerBackground FirstBanner2">
                                <div className="BannerContent">
                                <h2>HAPPY YOUR SPECIAL</h2>
                                <p>Love at first <span style={{color:"#FF154E"}}>bite</span></p>
                                <div className="OrderButton"><ShoppingCartOutlined/><h3>ORDER NOW</h3></div>
                                </div>
                        </div>
                    
                        <div className="BannerBackground FirstBanner3">
                                <div className="BannerContent">
                                <h2 className="LastBanner">GOOD FOOD IS GOOD MOOD</h2>
                                <p>The belly rules the<span style={{color:"#FF154E"}}> mind</span></p>
                                <p></p>
                                <div className="OrderButton"><ShoppingCartOutlined/><h3>ORDER NOW</h3></div>
                            </div>
                        </div>
                    
                </Carousel>
            </div>
            
        </div>  
    );
}
export default TopBanner