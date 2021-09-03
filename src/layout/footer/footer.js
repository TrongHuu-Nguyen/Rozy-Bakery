import {PhoneOutlined,MailOutlined,HomeOutlined,
        FacebookOutlined,TwitterOutlined,
        InstagramOutlined,YoutubeOutlined
} from '@ant-design/icons'
import './footer.css'
import Map from '../googleMap/googleMap.js'
const Footer=()=>{
    const key = 'AIzaSyBcV0kD4s20SVWhcXDlD-QugbCjjUiyhIo';
    return(
        <div className="Footer">
            <div className="FooterContent" >
                
                    <div className="WorkSchedule">
                        <div className="WorkScheduleItem">
                            <div className="Day"><p>Sunday</p></div>
                            <span>---</span>
                            <div className="Time"><p>Closed</p></div>
                        </div>
                        <div className="WorkScheduleItem">
                            <div className="Day"><p>Monday</p></div>
                            <span>---</span>
                            <div className="Time"><p>8:00-22:00</p></div>
                        </div>
                        <div className="WorkScheduleItem">
                            <div className="Day"><p>Tuesday</p></div>
                            <span>---</span>
                            <div className="Time"><p>8:00-22:00</p></div>
                        </div>    
                        <div className="WorkScheduleItem">
                            <div className="Day"><p>Wednesday</p></div>
                            <span>---</span>
                            <div className="Time"><p>8:00-22:00</p></div>
                        </div>
                        <div className="WorkScheduleItem">
                            <div className="Day"><p>Thursday</p></div>
                            <span>---</span>
                            <div className="Time"><p>8:00-22:00</p></div>
                        </div>
                        <div className="WorkScheduleItem">
                            <div className="Day"><p>Friday</p></div>
                            <span>---</span>
                            <div className="Time"><p>8:00-22:00</p></div>
                        </div>
                        <div className="WorkScheduleItem">
                            <div className="Day"><p>Satursday</p></div>
                            <span>---</span>
                            <div className="Time"><p>8:00-22:30</p></div>
                        </div>
                           
                    </div>

                    <div className="Address">
                        <h2>Address</h2>
                        <div className="Phone">
                            <PhoneOutlined style={{color:"#FBB40D",fontSize:"24px"}} />&nbsp;&nbsp;&nbsp;<p>+84 999 999 999</p>
                        </div>
                        <div className="Email">
                            <MailOutlined style={{color:"#FBB40D",fontSize:"24px"}} />&nbsp;&nbsp;&nbsp;<p>abc@xyz.com</p>
                        </div>
                        <div className="Location">
                            <HomeOutlined style={{color:"#FBB40D",fontSize:"24px"}} />&nbsp;&nbsp;&nbsp;<p>86 Tran Binh Trong-DaNang</p>
                        </div>
                        <div className="Social" >
                        <FacebookOutlined style={{color:"#365899",fontSize:"24px",cursor:"pointer"}} />&nbsp;&nbsp;&nbsp;
                        <TwitterOutlined style={{color:"#1DA1F2",fontSize:"24px",cursor:"pointer"}}/>&nbsp;&nbsp;&nbsp;
                        <InstagramOutlined style={{color:"#bc2a8d",fontSize:"24px",cursor:"pointer"}}/>&nbsp;&nbsp;&nbsp;
                        <YoutubeOutlined style={{color:"#EA4335",fontSize:"24px",cursor:"pointer"}}/>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>

                    <div className="GgMap">
                        <Map 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{maxHeight:`300px`, height: `40vh`, margin: `auto`, border: '2px solid black' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
            </div>
        </div>
    )
}
export default Footer