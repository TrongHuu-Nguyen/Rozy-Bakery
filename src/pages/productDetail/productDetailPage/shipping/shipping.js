import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faClock, faTags } from '@fortawesome/free-solid-svg-icons'

const Shipping = () => {
    return (
        <div className="Shipping">
            <div className="ShipPolicy">
                <div className="PolicyIcon" ><FontAwesomeIcon icon={faShippingFast} size="lg" style={{ color: "#FF514E" }} /></div>
                <p>Free global shipping on all orders</p>
            </div>
            <div className="ShipPolicy">
                <div className="PolicyIcon"><FontAwesomeIcon icon={faClock} size="lg" style={{ color: "#FF514E" }} /></div><p>2 hours easy returns if you change your mind</p>
            </div>
            <div className="ShipPolicy">
                <div className="PolicyIcon"><FontAwesomeIcon icon={faTags} size="lg" style={{ color: "#FF514E" }} /></div><p>Order before noon for same day dispatch</p>
            </div>
        </div>
    )
}
export default Shipping