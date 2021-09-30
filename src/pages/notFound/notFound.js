import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../asset/404notFound.png'
import './notFound.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const NotFound = () => {
  React.useEffect(() => { 
    AOS.init({
      duration: 2000,
      offset:0
    })
  }, []);

return (
  <div className="NotFound">
    <img
      src={notFound}
      alt="not-found"
      data-aos="fade-right"
    />
    <Link to="/" className="link-home"  data-aos="fade-left">
      Go Home
    </Link>
  </div>
)
};

export default NotFound;