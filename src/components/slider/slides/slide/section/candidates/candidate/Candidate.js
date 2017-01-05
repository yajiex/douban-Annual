import React from 'react';
import './Candidate.css';

const Candidate = (props) => (
  <a href={props.link}
     className={props.isPeopleSection ? "" : "candidate"}
     target="_blank"
     title={props.name}>
    <div className="candidate-num">
      <span>{props.num}</span>
    </div>
    <svg className="candidate-poster">
      <image xmlnsXlink="http://www.w3.org/1999/xlink"
             xlinkHref={props.posterLink}
             x="0"
             y="0"
             width="100%"
             height="100%"
             clipPath="url(#clipper)"
             preserveAspectRatio="xMidYMid slice"
      >
      </image>
    </svg>
    <div className="candidate-name">
      {props.name}
      <span className="candidate-rating">{props.rating}</span>
    </div>
  </a>
);

export default Candidate;
