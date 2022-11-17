import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import {Header} from "./Header";
import {Footer} from "./Footer";

const App = () => {
  return (
      <div className={'app-wrapper'}>
          <header className={'header'}>
              <img src="https://i.pinimg.com/originals/e4/74/0d/e4740d91e3e734fafeb1acbe0f14f467.jpg" alt=""/>
          </header>
          <nav className={'nav'}>
              <div>
                  <a>Profile</a>
              </div>
              <div>
                  <a>Messages</a>
              </div>
              <div>
                  <a>News</a>
              </div>
              <div>
                  <a>Music</a>
              </div>
              <div>
                  <a>Settings</a>
              </div>
          </nav>
          <div className={'content'}>
              <img src="https://st.depositphotos.com/1766887/2306/i/600/depositphotos_23063254-stock-photo-beautiful-white-sandy-beaches-of.jpg" alt=""/>
              <div>
                  ava + desc
              </div>
              <div>
                  my posts
              </div>
              <div>
                  New posts
              </div>
              <div>
                  <div>Post 1</div>
                  <div>Post 2</div>
              </div>
          </div>

      </div>
  )
}



export default App;
