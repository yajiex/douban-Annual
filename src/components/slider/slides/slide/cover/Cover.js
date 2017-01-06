import React from 'react';
import './Cover.css';
import video from './mp4iebg_v8.mp4';
import image from './p1489.jpg';

export default class Cover extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {

    const innerContent = this.props.isMobile ? (
        <div className="cover-counter">
          共 3,603,382 人访问
        </div>
      ) : (
        <div className="cover-background">
          <video loop
                 autoPlay
          >
            <source src={video}
                    type="video/mp4"
            />
          </video>
        </div>
      );
    return (
      <div className="cover">
        {innerContent}
        <h1 className="cover-title">
          <img src={image}
               alt="title"
          />
        </h1>
        <div className="cover-description">
          <div>基于2016年你和万千豆瓣用户的电影标记和访问数据，排名依据评分、评价人数和上映时间综合考虑（统计截至2016-12-25）</div>
        </div>
      </div>
    );
  }
}
