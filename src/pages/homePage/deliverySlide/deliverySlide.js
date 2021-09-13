import './deliverySlide.css'
import React from 'react'
import { Link } from 'react-router-dom'
import delivery from '../../../asset/delivery.png'
import deliveryMan from '../../../asset/deliveryMan.png'
import YoutubeIcon from '../../../asset/youtube.png'


const Delivery = () => {
    const [isShowVideo, setIsShowVideo] = React.useState(false);


    const showVideo = () => {
        setIsShowVideo(true);
    };
    const exitVideo = (e) => {
        e.stopPropagation();
        setIsShowVideo(false);
    };
    return (
        <div className="Delivery">

            <div className="DeliveryContent">
                <div className="Content">
                    <p style={{ color: "#FBB403", fontWeight: "bold" }}>Delivery</p>
                    <h2>A Moments Of Delivered <span style={{ color: "#FF514E" }}> On Right Time & Place </span></h2>
                    <p>
                        Food G is a restaurant, bar and coffee roastery located on a busy
                        corner site in Farringdon's Exmouth Market. With glazed frontage on
                        two sides of the building, overlooking the market and a bustling London inteon.
                    </p>
                    <div className="ShipperInfo">
                        <img src={deliveryMan} alt="shipper" width="100" height="100" />
                        <div>
                            <p>Delivery Order Num</p>
                            <h3 style={{ color: "#FF514E", fontWeight: "bold" }}>123-456789</h3>
                        </div>
                        <Link to="/product"><div className="OrderButton"><h3>ORDER NOW</h3></div></Link>
                    </div>
                </div>
                <div className="DeliveryImg">
                    <img src={delivery} alt="delivery-Food" />
                </div>

            </div>
            <div className="BottomBanner">
                <div className="Video">
                    <div className="PlayButton">
                        <img src={YoutubeIcon} alt="YoutubeIcon" width="100%" height="100%" onClick={showVideo}/>
                    </div>
                    {isShowVideo?<div className={isShowVideo?("VideoFrame ShowVideo"):"VideoFrame"} onClick={exitVideo}>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tJlzIJaokVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>:null}
                </div>
            </div>
            <div className="UpdateShop">
                <div className="CupsOfCoffee">
                    <p>350+</p>
                    <h2>Cups of Coffee</h2>
                </div>
                <div className="OrdersEveryday">
                    <p>2,678+</p>
                    <h2>Orders Everyday</h2>
                </div>
                <div className="SkilledProfessionals">
                    <p>60</p>
                    <h2>Skilled Professionals</h2>
                </div>
                <div className="SandwichsPerHour">
                    <p>30</p>
                    <h2>Sandwichs at Hour</h2>
                </div>
            </div>
        </div>
    )
}
export default Delivery