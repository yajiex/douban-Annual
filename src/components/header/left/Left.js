import React from 'react';
import logo from './p1017.jpg';
import './Left.css';

const Left = (props) => {
  const counterPart = props.isMobile ? null : <span className="header-left-counter">共 459,349 人访问</span>;
  return (
    <div className="header-left">
      <a href="https://movie.douban.com">
        <img src={logo}
             alt="logo"
        />
        <span>豆瓣</span>
      </a>
      <span className="header-left-sub-title">2016年度电影榜单</span>
      <div className="header-left-share-wrapper">
        <div className="header-left-share">
          <span>分享给朋友</span>
        </div>
      </div>
      {counterPart}
    </div>
  );
};

export default Left;
