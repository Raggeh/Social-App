import  './Post.css'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../TestData";
import { useState } from 'react';

const Post = ({post}) => {

  const [like, setLike] = useState(post.like)
   const [isLiked, setIsLiked] = useState(false);

   const LikeHandler = () => {
     setLike(isLiked ? like - 1 : like + 1);
     setIsLiked(!isLiked);
   };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfile"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate"> {post.date} </span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postRightIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc} </span>
          <img src={post.photo} alt="postImg" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={LikeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={LikeHandler}
              alt=""
            />

            <span className="likeCounter">{like} people like it </span>
          </div>
          <div className="postBottomRight">
            <span className="postComment"> {post.comment} comments </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post