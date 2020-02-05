// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = ({
    post: { likes, username, thumbnailUrl, imageUrl, comments }
}) => {
    // set up state for the likes
    const [postLikes, setPostLikes] = useState(likes);
    console.log(postLikes);

    return (
        <div className="post-border">
            <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"
                    className="post-image"
                    src={imageUrl}
                />
            </div>
            <LikeSection postLikes={postLikes} setPostLikes={setPostLikes} />
            <CommentSection postId={imageUrl} comments={comments} />
        </div>
    );
};

export default Post;

// let arr = [1, 2, 3]
// let arr2 = [5, 6, 7]

// let num = 4

// arr.push(num)

// arr = [...arr, num, ...arr2] // [1,2,3,4,5,6,7]
