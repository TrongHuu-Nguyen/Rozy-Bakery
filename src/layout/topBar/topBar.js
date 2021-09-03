import {ShopOutlined,FileTextOutlined,
        HomeOutlined,UnorderedListOutlined,
        ShoppingCartOutlined,UserOutlined,
        MenuOutlined,OrderedListOutlined
} from '@ant-design/icons'
import './topBar.css'
import React from 'react'


const TopBar=()=>{
    const [isShow,setIsShow]=React.useState(false);

    const showSideMenu=(e)=>{
        e.stopPropagation();
        setIsShow(true);
    };
    const exitSideMenu=(e)=>{
        e.stopPropagation();
        setIsShow(false);
    };
    return(
        <div className="MainMenu">
            <div className="TopBar">
                <div className="NavBar">
                    <div className="TopMenu">
                        <ul>
                            <li><MenuOutlined onClick={(e)=>{showSideMenu(e)}} /></li>
                            <li><HomeOutlined/>&nbsp;<p>Pages</p></li>
                            <li><UnorderedListOutlined />&nbsp;<p>Online Order</p></li>
                            <li><FileTextOutlined/>&nbsp;<p>News</p></li>
                            <li><ShopOutlined />&nbsp;<p>Store Location</p></li>   
                        </ul>
                    </div>
                    <div className="Cart-User">
                    <ul>
                            <li><ShoppingCartOutlined /><div className="CartUpdate"><p>0</p></div></li>
                            <li><UserOutlined /><p>Login</p></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className={isShow?"SideMenuBackground ShowSideMenu":"SideMenuBackground"} onClick={(e)=>{exitSideMenu(e)}}>
                <div className="SideMenu" onClick={(e)=>{e.stopPropagation();}}>
                    <div className="SideMenuTop" onClick={(e)=>{e.stopPropagation();}}>
                        <ul>
                            <li><UserOutlined style={{fontSize:"32px"}} />&nbsp;&nbsp;<p>Login</p></li>
                        </ul>
                    </div>
                    <div className="SideMenuBody" onClick={(e)=>{e.stopPropagation();}} >
                        <ul>
                            <li><HomeOutlined style={{fontSize:"24px"}}/>&nbsp;&nbsp;<p>Pages</p></li>
                            <li><UnorderedListOutlined style={{fontSize:"24px"}}/>&nbsp;&nbsp;<p>Online Order</p></li>
                            <li><FileTextOutlined style={{fontSize:"24px"}}/>&nbsp;&nbsp;<p>News</p></li>
                            <li><ShopOutlined style={{fontSize:"24px"}}/>&nbsp;&nbsp;<p>Store Location</p></li>              
                        </ul>
                    </div>
                    <div className="SideMenuBottom"  onClick={(e)=>{e.stopPropagation();}}>
                        <ul>
                            <li><OrderedListOutlined style={{fontSize:"24px"}}/>&nbsp;&nbsp;<p>Your Wishlist</p></li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar