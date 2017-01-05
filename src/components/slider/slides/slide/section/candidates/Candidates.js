import React from 'react';
import Candidate from './candidate/Candidate';
import './Candidates.css';

const Candidates = (props) => (
  <div className="candidates"
       data-scroll="limited"
  >
    <ul className="candidates-list">
      {/* TODO: Not understand what's the svg tag for */}
      <svg data-def="true">
        <defs>
          <clipPath id="clipper">
            <polygon points="22 0, 86 0, 86 122, 0 122, 0 22"></polygon>
          </clipPath>
        </defs>
      </svg>
      {
        props.candidates.map((candidate, index) => (
          <li key={`candidate${index}`}>
            <Candidate {...candidate}
                       isPeopleSection={props.isPeopleSection}
            />
          </li>
        ))
      }
    </ul>
  </div>
);

export default Candidates;
