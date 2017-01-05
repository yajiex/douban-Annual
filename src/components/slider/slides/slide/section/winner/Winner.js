import React from 'react';
import Rater from 'react-rater';
import './Winner.css';

const Winner = (props) => {
  const rater = props.rating ? (
      <div className="winner-rater">
        <Rater total={5}
               rating={props.rating / 2}
               interactive={false}
        />
        <span>{props.rating}</span>
        <span>{props.ratingNum} 人评价</span>
      </div>
    ) : (
      <div className="winner-rater winner-no-rating">
        <span>{props.ratingNum} 人想看</span>
      </div>
    );
  return props.moreInfo ? (
      <div className="winner">
        <h2 className="winner-name">
          <a href={props.winnerLink}
             target="_blank"
          >
            {props.winnerName}
          </a>
        </h2>
        <div className="winner-director">
          {props.director}
        </div>
        {rater}
        <div className="winner-counter">
          {props.comment}
          {
            props.commentAuthor === "" ? "" : (
                <a href={props.commentAuthorLink}
                   target="_blank"
                >
                  {props.commentAuthor}
                </a>)
          }
        </div>
      </div>
    ) : (
      <div className="winner">
        <h2>{props.winnerName}</h2>
      </div>
    )
};

export default Winner;