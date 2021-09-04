import './homepage.css'
import TopBar from '../../layout/topBar/topBar'
import Footer from '../../layout/footer/footer'
import TopBanner from './topBanner/topBanner'
import OrderStep from './orderStep/orderStep'
import MiddleBanner from './middleBanner/middleBanner'
import CategorySlide from './categorySlide/categorySlide'

const HomePage=()=>{
        return (
            <div className="HomePage">
                <TopBar/>
                <TopBanner/>
                <OrderStep/>
                <MiddleBanner/>
                <CategorySlide/>
                <Footer/>
            </div>  
        );
}
export default HomePage