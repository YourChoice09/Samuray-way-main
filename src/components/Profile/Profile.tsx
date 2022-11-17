import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://st.depositphotos.com/1766887/2306/i/600/depositphotos_23063254-stock-photo-beautiful-white-sandy-beaches-of.jpg" alt=""/>
            <div>
                ava + desc
            </div>
            <div>
                my posts
            </div>
            <div className={s.posts}>
                New posts
            </div>
            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </div>
        )
    }
    