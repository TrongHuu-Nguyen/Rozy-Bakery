import { Carousel } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './topBanner.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react';

const TopBanner = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 50
        });
        AOS.refresh();
    }, [])
    return (
        <div className="TopBanner" >
            <div className="Banner">
                <Carousel autoplay autoplaySpeed={3000}>

                    <div className="BannerBackground Banner1">
                        <div className="BannerContent">
                            <h2 data-aos="fade-left">
                                ENJOY YOUR MEAL
                            </h2>
                            <p data-aos="fade-right">
                                Good food is wise <span style={{ color: "#FF154E" }}>medicine</span>
                            </p>
                            <Link to="/product">
                                <div className="OrderButton" data-aos="zoom-out">
                                    <ShoppingCartOutlined /><h3>ORDER NOW</h3>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="BannerBackground Banner2">
                        <div className="BannerContent">
                            <h2 data-aos="fade-left">
                                HAPPY YOUR SPECIAL
                            </h2>
                            <p data-aos="fade-right">
                                Love at first <span style={{ color: "#FF154E" }}>bite</span>
                            </p>
                            <Link to="/product">
                                <div className="OrderButton" data-aos="zoom-out">
                                    <ShoppingCartOutlined /><h3>ORDER NOW</h3>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="BannerBackground Banner3">
                        <div className="BannerContent">
                            <h2 className="LastBanner" data-aos="fade-left">
                                GOOD FOOD IS GOOD MOOD
                            </h2>
                            <p data-aos="fade-right">
                                The belly rules the<span style={{ color: "#FF154E" }}> mind</span>
                            </p>
                            <p></p>
                            <Link to="/product">
                                <div className="OrderButton" data-aos="zoom-out">
                                    <ShoppingCartOutlined /><h3>ORDER NOW</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    );
}
export default TopBanner