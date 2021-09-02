import './homepage.css'
import TopBar from '../../components/topBar/topBar'
import Footer from '../../components/footer/footer'
import { Carousel } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import step1 from '../../asset/step-1.jpg'
import step2 from '../../asset/step-2.jpg'
import step3 from '../../asset/step-3.jpg'
import step4 from '../../asset/step-4.jpg'

const HomePage=()=>{
        return (
            <div className="HomePage">
                <TopBar/>
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
                <div className="OrderStep">
                    <div className="OrderStepTitle">
                        <h2>Order now!</h2>
                        <p>How it works</p>
                    </div>
                    <div className="OrderStepContent">
                        <div className="OrderStepTag">
                            <div className="OrderStepIcon">
                                <div className="TagNumber">
                                    <p>01 STEP</p>
                                </div>
                                <div className="TagImage">
                                    <img src={step1} alt="step-1"></img>
                                </div>
                            </div>
                            <h3>Choose Your Favorite</h3>
                        </div>
                        
                        <div className="OrderStepTag">
                            <div className="OrderStepIcon">
                                <div className="TagNumber">
                                    <p>02 STEP</p>
                                </div>
                                <div className="TagImage">
                                    <img src={step2} alt="step-2"></img>
                                </div>
                            </div>
                            <h3>We Deliver Your Meals</h3>
                        </div>
                      
                        <div className="OrderStepTag">
                            <div className="OrderStepIcon">
                                <div className="TagNumber">
                                    <p>03 STEP</p>
                                </div>
                                <div className="TagImage">
                                    <img src={step3} alt="step-3"></img>
                                </div>
                            </div>
                            <h3>Cash on Delivery</h3>
                        </div>
                        
                        <div className="OrderStepTag">
                            <div className="OrderStepIcon">
                                <div className="TagNumber">
                                    <p>04 STEP</p>
                                </div>
                                <div className="TagImage">
                                    <img src={step4} alt="step-4"></img>
                                </div>
                            </div>
                            <h3>Eat And Enjoy</h3>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>  
        );
}
export default HomePage