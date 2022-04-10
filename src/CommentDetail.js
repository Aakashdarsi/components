import React from "react";

const CommentDetail = props => {
    console.log(props)
    return (
        <div class="ui comments">
                            <div class="comment">
                                <a class="avatar">
                                <img src={props.imgsrc} alt = "avatar"/>
                                </a>
                                <div class="content">
                                <a class="author">{props.author}</a>
                                <div class="metadata">
                                    <div class="date">{props.time}</div>
                                    <div class="rating">
                                    <i class="star icon"></i>
                                    5 Faves
                                    </div>
                                </div>
                                <div class="text">
                                    {props.comment}
                                </div>
                                </div>
                            </div>
            </div>
    )
}
export default CommentDetail