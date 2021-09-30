import './middleBanner.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react';


const MiddleBanner = () => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div className="MiddleBanner">
            <div className="LeftSideTags">
                <div
                    className="TagItem TagOne"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                >
                    <div className="Tag">
                        <div className="TagNumb"><p>01</p></div>
                        <div className="TagContent">
                            <h2>Luctus</h2>
                            <p>Luctus mus commodi curabitur quis ratione mollit viverra
                                vestibulum, hendrerit quia blandit.</p>
                        </div>
                    </div>
                </div>
                <div 
                    className="TagItem TagTwo"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                >
                    <div className="Tag">
                        <div className="TagNumb"><p>02</p></div>
                        <div className="TagContent">
                            <h2>Esse</h2>
                            <p>Esse exercitationem felis occaecat sollicitudin cum!
                                Senectus congue, penatibus, pharetra, curae eum.</p>
                        </div>
                    </div>
                </div>
                <div 
                    className="TagItem"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                >
                    <div className="Tag">
                        <div className="TagNumb"><p>03</p></div>
                        <div className="TagContent">
                            <h2>Officia</h2>
                            <p>Officia cupiditate recusandae, libero,
                                ipsum ligula quidem, eum? Ut beatae!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="RightSideTags">
                <div 
                    className="TagItem" 
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="2000"
                >
                    <div className="Tag">
                        <div className="TagNumb"><p>04</p></div>
                        <div className="TagContent">
                            <h2>Magnis</h2>
                            <p>Dapibus vulputate atque sequi debitis viverra nibh tempore,
                                ipsam adipisicing, debitis ipsum integer venenatis omnis consequatur.</p>
                        </div>
                    </div>
                </div>
                <div 
                    className="TagItem TagFive"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="2000"
                >
                    <div className="Tag">
                        <div className="TagNumb"><p>05</p></div>
                        <div className="TagContent">
                            <h2>Incididunt</h2>
                            <p>Incididunt volutpat atque proin, sociosqu integer?
                                Pretium ad convallis dicta optio fugit!</p>
                        </div>
                    </div>
                </div>
                <div 
                    className="TagItem"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="2000"
                >
                    <div className="Tag">
                        <div className="TagNumb"><p>06</p></div>
                        <div className="TagContent">
                            <h2>Pharetra</h2>
                            <p>Pharetra vehicula sint earum quisquam mollitia,
                                facilisis officiis lacus risus, maecenas est.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MiddleBanner