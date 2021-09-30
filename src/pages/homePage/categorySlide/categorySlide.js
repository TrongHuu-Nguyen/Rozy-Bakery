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
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react';
const CategorySlide=()=>{
    React.useEffect(() => {
        AOS.init({ 
            duration:2000
        });
        AOS.refresh();
    }, [])
    return(
        <div className="CategorySlide">
            <div className="CategorySlideContent">
                <p  data-aos="fade-right" data-aos-offset="100">
                    What we have?
                    </p>
                <h2  data-aos="fade-left" data-aos-offset="100">
                    Browse food category
                    </h2>
            </div>
            
            <div 
            class="slider" 
            data-aos="zoom-out" 
            data-aos-offset="150"
            >
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