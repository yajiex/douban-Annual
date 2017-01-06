import React from 'react';
import './Navigator.css';

const Navigator = (props) => (
  <button className="navigator"
          data-tap="true"
          onClick={props.onClick}
  >
    <div className={props.isMobile ? "icon-next" : "icon-down"}>
    </div>
  </button>
);

export default Navigator;