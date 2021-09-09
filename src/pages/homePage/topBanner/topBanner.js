import { Carousel } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import './topBanner.css'


const TopBanner=()=>{
    return (
        <div className="TopBanner">
            
            <div className="Banner">
                <Carousel autoplay autoplaySpeed={3000}>
                    
                        <div className="BannerBackground Banner1">
                            <div className="BannerContent">
                                <h2>ENJOY YOUR MEAL</h2>
                                <p>Good food is wise <span style={{color:"#FF154E"}}>medicine</span></p>
                                <Link to="/product"><div className="OrderButton"><ShoppingCartOutlined/><h3>ORDER NOW</h3></div></Link>
                            </div>
                        </div>
                    
                        <div className="BannerBackground Banner2">
                                <div className="BannerContent">
                                <h2>HAPPY YOUR SPECIAL</h2>
                                <p>Love at first <span style={{color:"#FF154E"}}>bite</span></p>
                                <Link to="/product"><div className="OrderButton"><ShoppingCartOutlined/><h3>ORDER NOW</h3></div></Link>
                                </div>
                        </div>
                    
                        <div className="BannerBackground Banner3">
                                <div className="BannerContent">
                                <h2 className="LastBanner">GOOD FOOD IS GOOD MOOD</h2>
                                <p>The belly rules the<span style={{color:"#FF154E"}}> mind</span></p>
                                <p></p>
                                <Link to="/product"><div className="OrderButton"><ShoppingCartOutlined/><h3>ORDER NOW</h3></div></Link>
                            </div>
                        </div>
                    
                </Carousel>
            </div>
            
        </div>  
    );
}
export default TopBanner