import React from 'react';
import './Dialogue.css';

export default class Dialogue extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="dialogue">
        <div className="dialogue-main">
          <div className="dialogue-content">
            <div className="dialogue-words">
              {this.props.words}
            </div>
            <div className="dialogue-source">
              <a href={this.props.ink}
                 target="_blank"
              >
                《{this.props.source}》
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}