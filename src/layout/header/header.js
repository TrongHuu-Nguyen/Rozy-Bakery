import {SwapRightOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import './header.css'
const Header=(props)=>{
    return(<div className="PageHeader">
    <div className="HeaderTitle">
        <h2>{props.title}</h2>
        <div className="BreadCum">
            <Link to="/"><span>Home</span></Link>
             &nbsp;&nbsp;
            <SwapRightOutlined style={{color:"white",fontSize:"16px",fontWeight:"bold"}}/>&nbsp;&nbsp;
            <span>Shop</span>&nbsp;&nbsp;
            <SwapRightOutlined style={{color:"white",fontSize:"16px",fontWeight:"bold"}}/>&nbsp;&nbsp;
            <span style={{color:"#FF514E"}}>{props.title}</span>
        </div>
    </div>
</div>)
    
}
export default Header