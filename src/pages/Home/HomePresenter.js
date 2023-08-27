import React from 'react';
import './home.css';

const HomePresenter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="container home-container">
      <div className="chat left">
        <div className="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
          libero placeat blanditiis id, voluptatum explicabo unde, repudiandae
          recusandae, tempore voluptatibus voluptas adipisci rerum eveniet earum
          natus possimus optio? Blanditiis!
        </div>
        <div className="time">09:00</div>
      </div>
      <div className="chat right">
        <div className="time">09:15</div>
        <div className="right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit
          voluptate facere suscipit temporibus maxime nesciunt culpa aspernatur
          sint sunt voluptatibus, quisquam voluptas! Impedit veniam reiciendis
          rem quam quisquam quae.
        </div>
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="저에게 무엇이든 물어보세요!"
        />
        <button className="chat-send">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M7.60304 14.4389L13.9405 14.43M11.6869 5.56492L21.6924 10.5677C26.1826 12.8128 26.1737 16.4809 21.6924 18.7348L11.6869 23.7376C4.96053 27.1052 2.20281 24.3474 5.57041 17.6211L7.05533 14.6512L5.57041 11.6814C2.20281 4.95504 4.95169 2.20617 11.6869 5.56492Z"
              stroke="white"
              stroke-width="2.10714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePresenter;
