import { Link } from 'react-router-dom';
import {
    ShopOutlined, FileTextOutlined,
    HomeOutlined, UnorderedListOutlined,
    UserOutlined, OrderedListOutlined,
    ShoppingOutlined, LogoutOutlined
} from '@ant-design/icons'
import './sideMenu.css'

const SideMenu = (props) => {
    const { isShow, exitSideMenu, currentUser, showWishList, showOrder,logOut } = props;
    return (
        <div className={isShow ? "SideMenuBackground Show" : "SideMenuBackground"} onClick={(e) => { exitSideMenu(e) }}>
            <div className="SideMenu" onClick={(e) => { e.stopPropagation(); }}>
                <div className="SideMenuTop" onClick={(e) => { e.stopPropagation(); }}>
                    <ul>
                        <Link to="/login"><li><UserOutlined style={{ fontSize: "32px" }} />&nbsp;&nbsp;<p style={{ fontSize: "24px" }}>{currentUser}</p></li></Link>
                    </ul>
                </div>
                <div className="SideMenuBody" onClick={(e) => { e.stopPropagation(); }} >
                    <ul>
                        <Link to="/">
                            <li>
                                <HomeOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Pages</p>
                            </li>
                        </Link>
                        <Link to="/product">
                            <li>
                                <UnorderedListOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Online Order</p>
                            </li>
                        </Link>
                        <Link to="/notfound">
                            <li>
                                <FileTextOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>News</p>
                            </li>
                        </Link>
                        <Link to="/notfound">
                            <li>
                                <ShopOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Store Location</p>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="SideMenuBottom" onClick={(e) => { e.stopPropagation(); }}>
                    <ul>
                        <li onClick={showWishList}>
                            <OrderedListOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Your Wishlist</p>
                        </li>
                        <li onClick={showOrder}>
                            <ShoppingOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Your Order</p>
                        </li>
                        <li onClick={logOut}>
                            <LogoutOutlined style={{ fontSize: "24px" }} />&nbsp;&nbsp;<p>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenu