import './userFeedback.css'
import { Carousel } from 'antd';
import rose from '../../../asset/rose.jpg'
import nancy from '../../../asset/nancy.jpg'
import mikami from '../../../asset/mikami.jpg'
import lisa from '../../../asset/lisa.jpg'


const UserFeedback=()=>{
    return(
        <Carousel autoplay autoplaySpeed={4000}>
            <div className="UserFeedback">
                <div className="UserAvatar">
                    <div className="Frame">
                        <img src={rose} alt='Rose-BlackPink'/>
                    </div>
                </div>
                <div className="UserCaption">
                    <h2>Rose</h2>
                    <p>Had dinner with girl friends. 
                    Menu is perfect, something for everyone.
                    Service was awesome and Jason was very accommodating. 
                    Will be back definitely!</p>
                </div>
            </div>

            <div className="UserFeedback">
                <div className="UserAvatar">
                    <div className="Frame">
                        <img src={nancy} alt='Rose-BlackPink'/>
                    </div>
                </div>
                <div className="UserCaption">
                    <h2>Nancy</h2>
                    <p>I had lunch with some of my colleagues at Echo on Day 1. 
                        I had the wedge salad - it was delicious. 
                        On Night 2, I enjoyed a drink at the bar. 
                        I had a Margarita. The service was excellent!</p>
                </div>
            </div>

            <div className="UserFeedback">
                <div className="UserAvatar">
                    <div className="Frame">
                        <img src={mikami} alt='Rose-BlackPink'/>
                    </div>
                </div>
                <div className="UserCaption">
                    <h2>Mikami</h2>
                    <p>Had dinner with girl friends. 
                    Menu is perfect, something for everyone.
                    Service was awesome and Jason was very accommodating. 
                    Will be back definitely!</p>
                </div>
            </div>

            <div className="UserFeedback">
                <div className="UserAvatar">
                    <div className="Frame">
                        <img src={lisa} alt='Rose-BlackPink'/>
                    </div>
                </div>
                <div className="UserCaption">
                    <h2>Lisa</h2>
                    <p>I chose this restaurant because of their value 
                        And incredible superior customer Service they really awesome
                        Food with quality service Ha of their value And incredible sup with quality</p>
                </div>
            </div>
        </Carousel>
        
    )
}
export default UserFeedback