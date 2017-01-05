import React from 'react';
import Candidates from './candidates/Candidates';
import Content from './content/Content';
import People from './people/People';
import './Section.css';

export default class Section extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const innerContent = this.props.isPeopleSection ? (
        <div className="section-body">
          <People class1={this.props.class1}
                  class2={this.props.class2}
                  winnerName={this.props.winnerName}
                  peopleBGColor={this.props.categoryBGColor}
                  bgColor={this.props.categoryBGColor}
          />
        </div>
      ) : (
        <div className="section-body">
          <Content bgColor={this.props.categoryBGColor}
                   isReverse={this.props.isReverse}
                   contentType="category"
                   class1={this.props.class1}
                   class2={this.props.class2}
          />
          <Content bgColor={this.props.winnerBGColor}
                   isReverse={this.props.isReverse}
                   contentType="winner"
                   winnerName={this.props.winnerName}
                   winnerLink={this.props.winnerLink}
                   director={this.props.director}
                   rating={this.props.rating}
                   ratingNum={this.props.ratingNum}
                   comment={this.props.comment}
                   commentAuthor={this.props.commentAuthor}
                   commentAuthorLink={this.props.commentAuthorLink}
          />
        </div>
      );
    return (
      <div className={this.props.isPeopleSection ? "section section-people" : "section"}>
        <div className="section-wrapper"
             style={{ backgroundColor: this.props.sectionBGColor }}
        >
        </div>
        {innerContent}
        <Candidates candidates={this.props.candidates}
                    isPeopleSection={this.props.isPeopleSection}
        />
      </div>
    );
  }
}
