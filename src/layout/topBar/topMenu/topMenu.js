import {
    ShopOutlined, FileTextOutlined,
    HomeOutlined, UnorderedListOutlined,
    ShoppingCartOutlined, UserOutlined,
    MenuOutlined, OrderedListOutlined,
    LogoutOutlined, ContactsOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'


const TopMenu = (props) => {
    const { countCart, isLogIn, logOut, showCart, currentUser, showSideMenu, showWishList,showOrder } = props;

    return (
        <div className="TopBar">
            <div className="NavBar">
                <div className="TopMenu">
                    <ul>
                        <li><MenuOutlined onClick={(e) => { showSideMenu(e) }} /></li>
                        <li><Link to="/"><p style={{ color: "white" }}><HomeOutlined />&nbsp;Pages</p></Link></li>
                        <li><Link to="/product"><p style={{ color: "white" }}><UnorderedListOutlined />&nbsp;Online Order</p></Link></li>
                        <li><FileTextOutlined />&nbsp;<p>News</p></li>
                        <li><ShopOutlined />&nbsp;<p>Store Location</p></li>
                    </ul>
                </div>
                <div className="Cart-User">
                    <ul>
                        <li onClick={showCart}><ShoppingCartOutlined />
                            <div className="CartUpdate" >
                                <p>{countCart}</p>
                            </div>
                        </li>
                        <li>
                            <UserOutlined />
                            <Link to="/login"><p className="currentUser">{currentUser}</p></Link>
                            {isLogIn ? <ul>
                                <li onClick={showOrder}>
                                    <p><ContactsOutlined style={{ fontSize: "16px" }} />&nbsp;&nbsp;My Order</p>
                                </li>
                                <li onClick={showWishList}>
                                    <p><OrderedListOutlined style={{ fontSize: "16px" }} />&nbsp;&nbsp;My WishList</p>
                                </li>
                                <li>
                                    <p onClick={logOut}><LogoutOutlined style={{ fontSize: "16px" }} />&nbsp;&nbsp;Logout</p>
                                </li>
                            </ul> : null}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default TopMenu