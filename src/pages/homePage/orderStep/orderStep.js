import './orderStep.css'
import step1 from '../../../asset/step-1.jpg'
import step2 from '../../../asset/step-2.jpg'
import step3 from '../../../asset/step-3.jpg'
import step4 from '../../../asset/step-4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react';


const OrderStep=()=>{
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div className="OrderStep" data-aos="zoom-out" >
                    <div className="OrderStepTitle">
                        <h2>Order now!</h2>
                        <p>How it works</p>
                    </div>
                    <div className="OrderStepContent" >
                        <div className="OrderStepTag"
                            data-aos="zoom-in-down"
                            data-aos-offset="100"
                            data-aos-duration="1000"
                        >
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
                        
                        <div className="OrderStepTag"
                            data-aos="zoom-in-down"
                            data-aos-offset="150"
                            data-aos-duration="1500"
                        >
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
                      
                        <div className="OrderStepTag"
                            data-aos="zoom-in-down"
                            data-aos-offset="200"
                            data-aos-duration="2000"
                        >
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
                        
                        <div className="OrderStepTag"
                            data-aos="zoom-in-down"
                            data-aos-offset="250"
                            data-aos-duration="2500"
                        >
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
    )
}
export default OrderStep
