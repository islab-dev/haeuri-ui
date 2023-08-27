import React from 'react';
import LOGO from 'Assets/logo.png';

const ChatHeader = ({ title, prev }) => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="header">
      {/* {title} */}
      <img className="logo" src={LOGO} alt="prev" />
      <div className="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
        >
          <path
            d="M8.00003 16.92L1.48003 10.4C0.710027 9.63002 0.710027 8.37002 1.48003 7.60002L8.00003 1.08002"
            stroke="#706C6C"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

ChatHeader.defaultProps = {
  title: '해우리 상담사',
};

export default ChatHeader;
