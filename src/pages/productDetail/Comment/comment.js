import { Rate, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import React from 'react';
import './comment.css'
import OlderComment from './olderComment/oderComment'
import { useDispatch } from 'react-redux'
import { addCommentAPI,countComment } from '../../../slice/productSlice'
import { message } from 'antd';

const Comment = (props) => {
    const [rating, setRating] = React.useState(0);
    const commentRef = React.useRef("");
    const [listComments, setListComments] = React.useState(props.item.comments);
    const dispatch = useDispatch();
    const postComment = async () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            message.warning('You need to be logged in to comment.');
        }
        if (commentRef.current.value.trim() && !!currentUser) {
            const currentMoment = moment();
            const userComment = {
                id: Math.random().toString(36).slice(2),
                userName: currentUser.userId,
                userAvatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                rate: rating,
                comment: commentRef.current.value,
                moment: currentMoment
            };
            let newComment = [...listComments];
            newComment.push(userComment);
            setListComments(() => newComment);
            const updateProduct = { ...props.item };
            updateProduct.comments = newComment;
            dispatch(countComment(newComment.length))
            try {
                await dispatch(addCommentAPI(updateProduct));
            }
            catch (e) {
                console.log(e)
            }
        }
        commentRef.current.value = "";
        setRating(0);
        
    }

    return (
        <div className="CommentTable">
            <div className="ListComments">
                {listComments.map(item => {
                    return (
                        <OlderComment
                            key={item.id}
                            userName={item.userName}
                            userAvatar={item.userAvatar}
                            rate={item.rate}
                            comment={item.comment}
                            moment={item.moment}
                        />
                    )
                })}
            </div>
            <div className="CommentBox">
                <div className="UserAvatar"><Avatar icon={<UserOutlined />} size={60} /></div>
                <div className="CommentContent">
                    <div className="UserRate">
                        <Rate allowClear={false} value={rating} onChange={(value => setRating(() => value))} />
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