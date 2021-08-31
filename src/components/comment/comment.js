import { Rate,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import React from 'react';
import './comment.css'


const OlderComment=(props)=>{
    return(
        <div className="CommentBox">
                <div className="UserAvatar">
                    <Avatar src={props.userAvatar} size={50}/><p>{props.userName}</p>
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


const Comment=()=>{
    const [listComments,setListComments] = React.useState([]);
    const [rating,setRating] = React.useState(0);
    const commentRef=React.useRef("");

    const postComment=()=>{
        if(commentRef.current.value.trim()){
            const currentMoment=moment();
            const userComment={
               id: Math.random().toString(36).slice(2),
               userName:"User",
               userAvatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
               rate:rating,
               comment:commentRef.current.value,
               moment:currentMoment
           };
            let newComment=[...listComments];
            newComment.push(userComment);
            setListComments(()=>newComment);
            commentRef.current.value="";
            setRating(0);
        }
    }

    return(
        <div className="CommentTable">
            <div className="ListComments">
                {listComments.map(item=>{
                    return(
                        <OlderComment
                        key={item.id}
                        userName={item.userName}
                        userAvatar={item.userAvatar}
                        rate={item.rate}
                        comment={item.comment}
                        moment={item.moment}
                        />
                    )
                })
            }
            </div>
            <div className="CommentBox">
                <div className="UserAvatar"><Avatar icon={<UserOutlined />} size={50}/></div>
                <div className="CommentContent">
                    <div className="UserRate">
                        <Rate allowClear={false} value={rating}  onChange={(value=>setRating(()=>value))}/>
                        <p>(Please choose an one)</p>
                    </div>
                    <div className="UserComment">
                        <textarea ref={commentRef} className="comment" placeholder="Type your comment here..."></textarea>
                        <div className="PostCommentBtn" onClick={postComment}><p>Post Comment</p></div>
                    </div>
                </div>

            </div>
            
        </div>
        
    )
}

export default Comment