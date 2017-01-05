import React from 'react';
import './Death.css';

const Death = (props) => (
  <div className="death">
    <div>
      <h1>
        <div className="death-title-sub">2016</div>
        <div className="death-title-main">逝者</div>
      </h1>
      <p>他们的一生，是一段段罗曼蒂克消亡史。不是消逝，只是一次别离。</p>
    </div>
    <div className="death-candidates"
         data-scroll="limited"
    >
      <ul className="death-candidates-list">
        {
          props.candidates.map((candidate, index) => (
            <li key={`deathCandidate${index}`}>
              <a href={candidate.link}
                 target="_blank"
              >
                <div className="death-candidate-image"
                     style={{ backgroundImage: `url(${candidate.imageLink})` }}
                >
                </div>
              </a>
              <div className="death-candidate-name">
                <span>{candidate.name}</span>
                <span>{candidate.translatedName}</span>
              </div>
              <div className="death-candidate-info">
                {candidate.title} {candidate.age}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default Death;