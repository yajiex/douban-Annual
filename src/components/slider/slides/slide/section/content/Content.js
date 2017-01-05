import React from 'react';
import Category from '../category/Category';
import Winner from '../winner/Winner';
import './Content.css';

const Content = (props) => {
  const innerContent = props.contentType === "category" ?
    (
      <Category class1={props.class1}
                class2={props.class2}
      />
    ) :
    props.contentType === "winner" ?
      (
        <Winner moreInfo={true}
                winnerName={props.winnerName}
                winnerLink={props.winnerLink}
                director={props.director}
                rating={props.rating}
                ratingNum={props.ratingNum}
                comment={props.comment}
                commentAuthor={props.commentAuthor}
                commentAuthorLink={props.commentAuthorLink}
        />
      ) :
      "";
  return (
    <div
      className={props.isReverse ? "content content-reverse" : "content"}>
      <div className="content-left"
           style={{ backgroundColor: props.bgColor }}
      >
      </div>
      <div className="content-main-wrapper">
        <div className="content-main"
             style={{ backgroundColor: props.bgColor }}
        >
          {innerContent}
        </div>
      </div>
      <div className="content-right">
      </div>
    </div>
  );
};

export default Content;
