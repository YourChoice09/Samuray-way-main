import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://st.depositphotos.com/1766887/2306/i/600/depositphotos_23063254-stock-photo-beautiful-white-sandy-beaches-of.jpg" alt=""/>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
        )
    }
    