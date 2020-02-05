import React from "react";
const LikeSection = ({ postLikes, setPostLikes }) => {
    console.log(postLikes);
    return (
        <div>
            <div className="like-section" key="likes-icons-container">
                <div className="like-section-wrapper">
                    <i
                        className="far fa-heart"
                        onClick={() => setPostLikes(postLikes + 1)}
                    />
                </div>
                <div className="like-section-wrapper">
                    <i className="far fa-comment" />
                </div>
            </div>
            <p className="like-number">{postLikes} likes</p>
        </div>
    );
};

export default LikeSection;
