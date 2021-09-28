import './homepage.css'
import React from 'react'
import TopBar from '../../layout/topBar/topBar'
import Footer from '../../layout/footer/footer'
import TopBanner from './topBanner/topBanner'
import OrderStep from './orderStep/orderStep'
import MiddleBanner from './middleBanner/middleBanner'
import CategorySlide from './categorySlide/categorySlide'
import Delivery from './deliverySlide/deliverySlide'
import UserFeedback from './userFeedback/userFeedback'
import {BackTop} from 'antd'
const HomePage=()=>{
    React.useEffect(()=>{
        window.scrollTo(0,0);
    },[])
        return (
            <div className="HomePage">
                <BackTop />
                <TopBar/>
                <TopBanner/>
                <OrderStep/>
                <MiddleBanner/>
                <CategorySlide/>
                <Delivery/>
                <UserFeedback/>
                <Footer/>
            </div>  
        );
}
export default HomePage