import './categorySlide.css'
import hamburger from '../../../asset/hamburger.png'
import burger from '../../../asset/burger.png'
import coffee from '../../../asset/coffee-cup.png'
import hotdog from '../../../asset/hot-dog.png'
import chicken from '../../../asset/thanksgiving.png'
import pizza from '../../../asset/pizza.png'
import meat from '../../../asset/meat.png'
import fastFood from '../../../asset/fast-food.png'
import soda from '../../../asset/soda-can.png'
const CategorySlide=()=>{
    return(
        <div className="CategorySlide">
            <div className="CategorySlideContent">
                <p>What we have?</p>
                <h2>Browse food category</h2>
            </div>
            
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src={hamburger} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={chicken} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={coffee} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={burger} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={meat} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={hotdog} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={soda} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={fastFood} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={pizza} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={hamburger} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={chicken} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={coffee} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={burger} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={meat} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={hotdog} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={soda} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={fastFood} height="100" width="100" alt="" />
                    </div>
                    <div class="slide">
                        <img src={pizza} height="100" width="100" alt="" />
                    </div>
                </div>
            </div>
        </div>
            
    )
}
export default CategorySlide