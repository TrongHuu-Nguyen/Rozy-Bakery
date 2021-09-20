import {Link} from 'react-router-dom';
import {
    ShopOutlined, FileTextOutlined,
    HomeOutlined, UnorderedListOutlined,
    UserOutlined, OrderedListOutlined,
} from '@ant-design/icons'
// import './sideMenu.css'

const SideMenu=(props)=>{
    const {isShow,exitSideMenu,currentUser}=props;
    return(
        <div className={isShow ? "SideMenuBackground Show" : "SideMenuBackground"} onClick={(e) => {exitSideMenu(e) }}>
                <div className="SideMenu" onClick={(e) => { e.stopPropagation(); }}>
                    <div className="SideMenuTop" onClick={(e) => { e.stopPropagation(); }}>
                        <ul>
                            <Link to="/login"><li><UserOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;<p style={{ fontSize: "24px" }}>{currentUser}</p></li></Link>
                        </ul>
                    </div>
                    <div className="SideMenuBody" onClick={(e) => { e.stopPropagation(); }} >
                        <ul>
                            <li><HomeOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Pages</p></li>
                            <li><UnorderedListOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Online Order</p></li>
                            <li><FileTextOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>News</p></li>
                            <li><ShopOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Store Location</p></li>
                        </ul>
                    </div>
                    <div className="SideMenuBottom" onClick={(e) => { e.stopPropagation(); }}>
                        <ul>
                            <li><OrderedListOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Your Wishlist</p></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default SideMenu