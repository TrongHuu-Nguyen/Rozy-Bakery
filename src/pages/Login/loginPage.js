import './login.css'
import loginImage from '../../asset/pngegg.png'
import Footer from '../../layout/footer/footer'
import React from 'react'
import { ShopOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'


const LoginPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //input ref
    let userIdRef = React.useRef(null);
    let userPassRef = React.useRef(null);
    let registerIdRef = React.useRef(null);
    let registerPassRef = React.useRef(null);
    let reWritePassRef = React.useRef(null);
    //error span ref
    let userIdErrorRef = React.useRef(null);
    let userPassErrorRef = React.useRef(null);
    let registerIdErrorRef = React.useRef(null);
    let registerPassErrorRef = React.useRef(null);
    let reWritePassErrorRef = React.useRef(null);
    // constants
    const idPattern = /^[a-z0-9_]{5,16}$/;
    const passwordPattern = /^[a-z0-9]{8,20}$/;
    const idErrorMess="5-16 characters '_' and numbers, no special characters";
    const passErrorMess="8-20 characters and numbers, no special characters";
    const rewritepassErrorMess="re-enter password does not match";

    const clearErrorMess=()=>{
        userIdErrorRef.current.innerHTML="";
        userPassErrorRef.current.innerHTML="";
        registerIdErrorRef.current.innerHTML="";
        registerPassErrorRef.current.innerHTML="";
        reWritePassErrorRef.current.innerHTML="";
        userIdRef.current.value="";
        userPassRef.current.value="";
        registerIdRef.current.value="";
        registerPassRef.current.value="";
        reWritePassRef.current.value="";
    };
   

    const UserSignUp = () => {
        let isValid=true;
        let registerId=registerIdRef.current.value;
        let registerPass=registerIdRef.current.value;
        let reWritePass=registerIdRef.current.value;
        const validate=(item,validate,error,mess)=>{
            if(item===""){
                error.current.innerHTML="*Required";
                isValid=false;
            }
            if(!validate.test( item)){
                error.current.innerHTML=mess;
                isValid=false;
            }
            if(validate.test( item)){
                error.current.innerHTML="";
            }
        }
        validate(registerId,idPattern,registerIdErrorRef,idErrorMess);
        validate(registerPass,passwordPattern,registerPassErrorRef,passErrorMess);
        validate(reWritePass,passwordPattern,reWritePassErrorRef,passErrorMess);
        if(reWritePass!==registerPass){
            reWritePassErrorRef.current.innerHTML=rewritepassErrorMess;
            isValid=false;
        }
        if(isValid){
            setIsShow(false);
        }
    };
    


    const [isShow, setIsShow] = React.useState(false);

    const ShowRegisterBox = (e) => {
        e.stopPropagation();
        setIsShow(true);
    };
    const exitRegisterBox = (e) => {
        e.stopPropagation();
        clearErrorMess();
        setIsShow(false);
    };
    const UserLogin = (e) => {

    };
    
    return (
        <div className="LoginPage">
            <div className="LoginBox">
               
                <div className="LoginImage">
                    <img src={loginImage} alt="login" />
                </div>
                <div className='LoginForm'>
                    <h2><b>JOIN WITH US</b></h2>
                    <p style={{ color: "gray" }}>
                        Don't have an account? <span className="CreateAccount" onClick={ShowRegisterBox}>Create an account</span>
                    </p>
                    <div className="InputID">

                        <label for="UserID">User ID</label><br/><br />
                        <input ref={userIdRef} type="text" placeholder="Your ID" id="UserID" className="LoginInput" required></input>
                        <span ref={userIdErrorRef}></span><br/>

                    </div><br />
                    <div className="InputPassword">

                        <label for="UserPassword">User Password</label><br />
                        <input ref={userPassRef} type="text" placeholder="Your Password" id="UserPassword" className="LoginInput" required></input>
                        <br/><span ref={userPassErrorRef}></span><br/>

                    </div><br />
                    <div className="InputSubmit">
                        <div className="SubmitBtn" onClick={UserLogin}><p>LOG IN</p></div>
                        <div className="HomeBtn"><Link to="/"><p><ShopOutlined style={{fontSize: "16px"}}/>&nbsp;HOME PAGE</p></Link></div>
                    </div>
                    {/* <Divider>Or</Divider> */}
                </div>

            </div>
            <div className={isShow ? "RegisterAccount ShowRegisterBox" : "RegisterAccount"} onClick={exitRegisterBox}>
                <div className="RegisterBox" onClick={(e) => { e.stopPropagation(); }}>
                    <div className='RegisterForm' onClick={(e) => { e.stopPropagation() }}>
                        <form>
                            <h2><span className="CreateAccount">Create your account</span></h2>
                            <div className="InputID">

                                <label for="RegisterUserID">User ID</label><br />
                                <input ref={registerIdRef} type="text" placeholder="Enter Your ID" id="RegisterUserID" className="LoginInput" required></input>
                                <br/><span ref={registerIdErrorRef}></span><br/>

                            </div>
                            
                            <div className="InputPassword">

                                <label for="RegisterUserPassword">User Password</label><br />
                                <input ref={registerPassRef} type="password" placeholder="Enter Your Password" id="RegisterUserPassword" className="LoginInput" required></input>
                                <br/><span ref={registerPassErrorRef}></span><br/>

                            </div>
                            <div className="InputPassword">

                                <label for="RegisterUserPasswordRewrite">Rewrite Your Password</label><br />
                                <input ref={reWritePassRef} type="password" placeholder="Rewrite Your Password" id="RegisterUserPasswordRewrite" className="LoginInput" required></input>
                                <br/><span ref={reWritePassErrorRef}></span><br/>

                            </div><br />
                            <div className="InputSubmit">
                                <div className="SubmitBtn" onClick={UserSignUp}><p>SIGN UP</p></div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
export default LoginPage