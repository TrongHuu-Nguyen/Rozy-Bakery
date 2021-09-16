import moment from 'moment'
import { Rate, Avatar } from 'antd'

const OlderComment = (props) => {
    return (
        <div className="CommentBox">
            <div className="UserAvatar">
                <Avatar src={props.userAvatar} size={50} />
                <p>{props.userName}</p>
            </div>
            <div className="CommentContent">
                <div className="UserRate">
                    <Rate allowClear={false} value={props.rate} disabled />
                    <p>({moment(props.moment).fromNow()})</p>
                </div>
                <div className="UserComment">
                    <textarea disabled="" className="comment" value={props.comment}></textarea>
                </div>
            </div>
        </div>
    )
};

export default OlderComment