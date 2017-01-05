import React from 'react';
import Category from '../category/Category';
import Winner from '../winner/Winner';
import './People.css';
import '../content/Content.css';

const People = (props) => (
<div
  className={props.isReverse ? "content content-reverse" : "content"}>
  <div className="content-left"
       style={{ backgroundColor: props.bgColor }}
  >
  </div>
  <div className="content-main-wrapper">
    <div className="people"
         style={{ backgroundColor: props.peopleBGColor }}
    >
      <Category class1={props.class1}
                class2={props.class2}
      />
      <Winner moreInfo={false}
              winnerName={props.winnerName}
      />
    </div>
  </div>
  <div className="content-right">
  </div>
</div>

);

export default People;