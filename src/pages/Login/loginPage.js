import './login.css'
import loginImage from '../../asset/pngegg.png'
import Footer from '../../layout/footer/footer'
import React from 'react'
import { Popover } from 'antd'






const LoginPage=()=>{
    const userIdRef=React.useRef(null);
    const userPassRef=React.useRef(null);
    const registerIdRef=React.useRef(null);
    const registerPassRef=React.useRef(null);
    const reWriteIdRef=React.useRef(null);
    const reWritePassRef=React.useRef(null);

    const content =(
        <div>
            <p>bsvwvwvrevevrv</p>
        </div>
    )


    const [isShow,setIsShow]=React.useState(false);

    const ShowRegisterBox=(e)=>{
        e.stopPropagation();
        setIsShow(true);
    };
    const exitRegisterBox=(e)=>{
        e.stopPropagation();
        setIsShow(false);
    };
    const UserLogin=(e)=>{
        
    };
    const UserSignUp=(e)=>{
        e.stopPropagation();
        setIsShow(false);
    };
    return(
        <div className="LoginPage">
            <div className="LoginBox">
                <div className="LoginImage">
                    <img src={loginImage} alt="login" />
                </div>
                <div className='LoginForm'>
                    <h2>JOIN WITH US</h2>
                    <p style={{color:"gray"}}>
                        Don't have an account? <span className="CreateAccount" onClick={ShowRegisterBox}>Create an account</span>
                    </p>
                    <div className="InputID">
                        <label for="UserID">User ID</label><br/>
                        <input ref={userIdRef} type="text" placeholder="Your ID" id="UserID" className="LoginInput" required></input>
                    </div><br/>
                    <div className="InputPassword">
                        <label for="UserPassword">User Password</label><br/>
                        <input ref={userPassRef} type="text" placeholder="Your Password" id="UserPassword" className="LoginInput" required></input>
                    </div><br/>
                    <div className="InputSubmit">
                        <div className="SubmitBtn" onClick={UserLogin}><p>LOG IN</p></div>
                    </div>
                    {/* <Divider>Or</Divider> */}
                </div>

            </div>
            <div className={isShow?"RegisterAccount ShowRegisterBox":"RegisterAccount"} onClick={exitRegisterBox}>
                <div className="RegisterBox" onClick={(e)=>{e.stopPropagation();}}>
                    <div className='RegisterForm' onClick={(e)=>{e.stopPropagation();}}>
                        <h2><span className="CreateAccount">Create your account</span></h2>
                        <div className="InputID">
                            <Popover content={content} trigger="focus">
                                <label for="RegisterUserID">User ID</label><br/>
                                <input ref={registerIdRef} type="text" placeholder="Enter Your ID" id="RegisterUserID" className="LoginInput" required></input>
                            </Popover>
                        </div>
                        <div className="InputID">
                            <Popover content={content} trigger="focus">
                                <label for="RegisterUserIDRewrite">Rewrite Your ID</label><br/>
                                <input ref={reWriteIdRef} type="text" placeholder="Rewrite Your ID" id="RegisterUserIDRewrite" className="LoginInput" required></input>
                            </Popover>
                        </div><br/>
                        <div className="InputPassword">
                            <Popover content={content} trigger="focus">
                                <label for="RegisterUserPassword">User Password</label><br/>
                                <input ref={registerPassRef} type="password" placeholder="Enter Your Password" id="RegisterUserPassword" className="LoginInput" required></input>
                            </Popover>
                        </div>
                        <div className="InputPassword">
                            <Popover content={content} trigger="focus">
                                <label for="RegisterUserPasswordRewrite">Rewrite Your Password</label><br/>
                                <input ref={reWritePassRef} type="password" placeholder="Rewrite Your Password" id="RegisterUserPasswordRewrite" className="LoginInput" required></input>
                            </Popover>
                        </div><br/>
                        <div className="InputSubmit">
                            <div className="SubmitBtn" onClick={UserSignUp}><p>SIGN UP</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
export default LoginPage