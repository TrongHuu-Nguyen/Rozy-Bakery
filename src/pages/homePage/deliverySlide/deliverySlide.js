import './deliverySlide.css'
import React from 'react'
import { Link } from 'react-router-dom'
import delivery from '../../../asset/delivery.png'
import deliveryMan from '../../../asset/deliveryMan.png'
import YoutubeIcon from '../../../asset/youtube.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Delivery = () => {
    const [isShowVideo, setIsShowVideo] = React.useState(false);
    React.useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, [])


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
                    <h3
                        data-aos="fade-left"
                        data-aos-offset="200"
                    >
                        Delivery
                    </h3>
                    <h2
                        data-aos="fade-right"
                        data-aos-offset="200"
                    >
                        A Moments Of Delivered <span style={{ color: "#FF514E" }}> On Right Time & Place </span>
                    </h2>
                    <p
                        data-aos="zoom-out"
                        data-aos-offset="200"
                    >
                        Rozy's fastfood is a restaurant, bar and coffee roastery located on a busy
                        corner site in Farringdon's Exmouth Market. With glazed frontage on
                        two sides of the building, overlooking the market and a bustling London inteon.
                    </p>
                    <div className="ShipperInfo">
                        <img
                            src={deliveryMan}
                            alt="shipper"
                            width="100"
                            height="100"
                            data-aos="fade-right"
                            data-aos-offset="100"
                        />
                        <div
                            data-aos="zoom-out"
                            data-aos-offset="120"
                        >
                            <p>
                                Delivery Order Num
                            </p>
                            <h3 style={{ color: "#FF514E", fontWeight: "bold" }}>123-456789</h3>
                        </div>
                        <Link to="/product">
                            <div
                                className="OrderButton"
                                data-aos="fade-left"
                                data-aos-offset="100"
                            >
                                <h3>ORDER NOW</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div
                    className="DeliveryImg"
                    data-aos="zoom-in-down"
                    data-aos-offset="400"
                >
                    <img src={delivery} alt="delivery-Food" />
                </div>

            </div>
            <div className="BottomBanner">
                <div className="Video">
                    <div
                        className="PlayButton"
                        data-aos="zoom-out"
                        data-aos-offset="100"
                        data-aos-duration="3000"
                    >
                        <img src={YoutubeIcon} alt="YoutubeIcon" width="100%" height="100%" onClick={showVideo} />
                    </div>
                    {isShowVideo ? <div className={isShowVideo ? ("VideoFrame ShowVideo") : "VideoFrame"} onClick={exitVideo}>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tJlzIJaokVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> : null}
                </div>
            </div>
            <div className="UpdateShop">
                <div
                    className="CupsOfCoffee"
                    data-aos="zoom-out"
                    data-aos-offset="50"
                >
                    <p>350+</p>
                    <h2>Cups of Coffee</h2>
                </div>
                <div
                    className="OrdersEveryday"
                    data-aos="zoom-out"
                    data-aos-offset="100"
                >
                    <p>2,678+</p>
                    <h2>Orders Everyday</h2>
                </div>
                <div
                    className="SkilledProfessionals"
                    data-aos="zoom-out"
                    data-aos-offset="150"
                >
                    <p>60</p>
                    <h2>Skilled Professionals</h2>
                </div>
                <div
                    className="SandwichsPerHour"
                    data-aos="zoom-out"
                    data-aos-offset="200"
                >
                    <p>30</p>
                    <h2>Sandwichs at Hour</h2>
                </div>
            </div>
        </div>
    )
}
export default Delivery