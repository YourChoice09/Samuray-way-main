import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, whats next?'} likesCount={15}/>
                <Post message={'Who ever answer?'} likesCount={9}/>
                <Post message={'This cat is a real bandit'} likesCount={25}/>
            </div>
        </div>
        )
    }
    