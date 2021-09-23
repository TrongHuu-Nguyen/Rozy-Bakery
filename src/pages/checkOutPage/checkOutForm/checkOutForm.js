import './checkOutForm.css'
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,LeftOutlined } from '@ant-design/icons';
const { Step } = Steps;



const CheckOutForm=(props)=>{
    return(
        <div className="CheckOutForm" >
                    <Steps>
                        <Step status="finish" title="Login" icon={<UserOutlined />} />
                        <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                        <Step status="process" title="Checkout" icon={<LoadingOutlined />} />
                        <Step status="wait" title="Done" icon={<SmileOutlined />} />
                    </Steps>
                    <br />
                    <br />
                    <h2>Contact information</h2>
                    <div className="UserAccount">
                        <UserOutlined style={{ fontSize: "32px" }} />
                        <p className="currentUser">{props.currentUser.userId}
                        </p>
                    </div>
                    <div className="UserInfoForm">
                        <h2>Shipping address</h2>
                        <div className="InputName">
                            <input type="text" placeholder="First name" /> <input type="text" placeholder="Last name" />
                        </div>
                        <div className="InputAddress">
                            <input type="text" placeholder="Address" />
                        </div>
                        <div className="InputContact">
                            <input type="mail" placeholder="Email" />
                            <input type="phone" placeholder="Phone number" />
                        </div>
                        <div className="CheckOutButton">
                            <p> <LeftOutlined /> Return to shop </p>
                            <button>CHECKOUT</button>
                        </div>
                    </div>
                </div>
    )
};

export default CheckOutForm