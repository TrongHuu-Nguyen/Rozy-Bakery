import Header from '../../layout/header/header'
import React from 'react'
import Footer from '../../layout/footer/footer'
import TopBar from '../../layout/topBar/topBar'
import CheckOutForm from './checkOutForm/checkOutForm'
import ListProduct from './listProduct/listProduct'
import './checkOutPage.css'


const CheckOutPage = () => {
    const currentUser=JSON.parse(localStorage.getItem("currentUser"));
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <div className="CheckOut">
            <TopBar />
            <Header title={"Check out"} />
            <div className="CheckOutBody">
                <CheckOutForm
                currentUser={currentUser}
                /> 
                <ListProduct/>
            </div>
            <Footer />
        </div>
    )
}
export default CheckOutPage