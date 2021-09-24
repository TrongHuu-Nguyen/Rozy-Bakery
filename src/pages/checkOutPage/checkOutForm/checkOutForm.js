import './checkOutForm.css'
import React from 'react'
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,LeftOutlined,CheckCircleOutlined } from '@ant-design/icons';
import {message} from 'antd'
import {Link} from 'react-router-dom'


const { Step } = Steps;
const CheckOutForm=(props)=>{
    const [process,setProcess] = React.useState(true);



    const firstNameRef=React.useRef(null);
    const lastNameRef=React.useRef(null);
    const addressRef=React.useRef(null);
    const mailRef=React.useRef(null);
    const phoneRef=React.useRef(null);

    const namePattern = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    const addressPattern = /^[A-Za-z0-9'\.\-\s\,]/;
    const phonePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const mailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


    
    const NameErrorMess = "Has no special characters";
    const addressErrorMess = "Address has no special characters";
    const phoneErrorMess = "phone has 10-11 digit";
    const mailErrorMess = "Email invalidate";

    const clearAll = () => {
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        addressRef.current.value = "";
        mailRef.current.value = "";
        phoneRef.current.value = "";
    };

    const checkOutHandle=()=>{
        let isValid = true;
        let firstName=firstNameRef.current;
        let lastName=lastNameRef.current;
        let address=addressRef.current;
        let email=mailRef.current;
        let phone=phoneRef.current;

        const validate = (item, validate, mess) => {
            if (item.value === "") {
                item.placeholder = "*Required";
                return isValid = false;
            }
            if (!validate.test(item.value)) {
                item.value = "";
                item.placeholder = mess;
                return isValid = false;
            }
        }

        validate(firstName,namePattern,NameErrorMess);
        validate(lastName,namePattern,NameErrorMess);
        validate(address,addressPattern,addressErrorMess);
        validate(email,mailPattern,mailErrorMess);
        validate(phone,phonePattern,phoneErrorMess);

        if (isValid) {
            const key = 'updatable';
            
            message.loading({ content: 'Sending...',key});
            setTimeout(() => {
                window.scrollTo(0,0);
                message.success({ content: 'Order Success!',key, duration: 2 });
                clearAll();
                
                setProcess(false)
            }, 1000);
        }
    };

    return(
        <div className="CheckOutForm" >
                    <Steps>
                        <Step status="finish" title="Login" icon={<UserOutlined />} />
                        <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                        <Step status={process?"process":"finish"} title="Check out" icon={process?<LoadingOutlined />:<CheckCircleOutlined />} />
                        <Step status={process?"wait":"finish"} title="Done" icon={<SmileOutlined />} />
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
                            <input type="text" ref={firstNameRef} placeholder="First name" />
                            <input type="text" ref={lastNameRef} placeholder="Last name" />
                        </div>
                        <div className="InputAddress">
                            <input type="text" ref={addressRef} placeholder="Address" />
                        </div>
                        <div className="InputContact">
                            <input type="email" ref={mailRef} placeholder="Email" />
                            <input type="phone" ref={phoneRef} placeholder="Phone number" />
                        </div>
                        <div className="CheckOutButton">
                            <Link to="/product">
                            <p> <LeftOutlined /> Return to shop </p>
                            </Link>
                            <button onClick={checkOutHandle}>CHECKOUT</button>
                        </div>
                    </div>
                </div>
    )
};

export default CheckOutForm