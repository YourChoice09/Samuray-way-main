import React from 'react';
import s from './Post.module.css';

type PostProsType = {
    message: string;
    likesCount: number;
}

export const Post = (props: PostProsType) => {
    return (
                <div className={s.item}>
                    <img src="https://chudo-prirody.com/uploads/posts/2021-08/thumbs/1628781890_146-p-kot-bandit-foto-170.jpg" alt=""/>
                    {props.message}
                    <div>
                        <span>Likes: {props.likesCount}</span>
                    </div>
                </div>

        )
    }
    