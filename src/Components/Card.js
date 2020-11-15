import React, { Component, useState } from 'react'

let Card = (props) => {

    let { user__pp, name, username, post__date, content, comment__count, comment__retweet, comment__like__count } = props;
    return (
        <div className="card__container">
            <article className="pt-3">
                <div className="card__content">
                    <div className="user__photo">
                        <div className="usr__pp">
                            <img src={user__pp} width="100%" />
                        </div>
                    </div>

                    <div className="user__content">
                        <div className="usr__header">
                            <span>{name}</span>
                            <span>@{username}</span>
                            <span>{post__date}</span>
                            <span><i className="fas fa-ellipsis-h"></i></span>
                        </div>

                        <div className="usr__body">
                            {content}
                        </div>

                        {/* 
                        
                        */}

                        <div className="container-fluid">
                            <div className="row">
                                <div className="d-flex justify-content-between post__footer">
                                    <div><i className="far fa-comment"></i> <span>{comment__count}</span></div>
                                    <div><i class="fas fa-retweet"></i> <span>{comment__retweet}</span></div>
                                    <div><i class="far fa-heart"></i> <span>{comment__like__count}</span></div>
                                    <div><i class="fas fa-upload"></i></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    )
}

export default Card;