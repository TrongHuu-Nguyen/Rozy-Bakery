import './homepage.css'
import TopBar from '../../layout/topBar/topBar'
import Footer from '../../layout/footer/footer'
import TopBanner from './topBanner/topBanner'
import OrderStep from './orderStep/orderStep'
import MiddleBanner from './middleBanner/middleBanner'
import CategorySlide from './categorySlide/categorySlide'
import Delivery from './deliverySlide/deliverySlide'

const HomePage=()=>{
        return (
            <div className="HomePage">
                <TopBar/>
                <TopBanner/>
                <OrderStep/>
                <MiddleBanner/>
                <CategorySlide/>
                <Delivery/>
                <Footer/>
            </div>  
        );
}
export default HomePage