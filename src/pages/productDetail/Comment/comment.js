import { Rate, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import React from 'react';
import './comment.css'
import OlderComment from './olderComment/oderComment'
import {useSelector,useDispatch} from 'react-redux'
import {getProductAPI,addCommentAPI} from '../../../slice/productSlice'

const Comment = (props) => {
    const [rating, setRating] = React.useState(0);
    const commentRef = React.useRef("");
    const ProductData=useSelector((state)=>state.products.list);
    const index = ProductData.map(item => item.id).indexOf(props.itemId);
    const [listComments, setListComments] = React.useState(ProductData[index].comments);

    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch(getProductAPI());
    }, [dispatch])

    const postComment = () => {
        if (commentRef.current.value.trim()) {
            const currentMoment = moment();
            const userComment = {
                id: Math.random().toString(36).slice(2),
                userName: "User",
                userAvatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                rate: rating,
                comment: commentRef.current.value,
                moment: currentMoment
            };
            let newComment = [...listComments];
            newComment.push(userComment);
            setListComments(() => newComment);
            // ProductData[index].comments = newComment;
            commentRef.current.value = "";
            setRating(0);

            const updateProduct=[...ProductData[index] ];
            updateProduct.comments=listComments;
            dispatch(addCommentAPI(updateProduct));

        }
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