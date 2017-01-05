import React from 'react'
import Cover from './cover/Cover';
import Dialogue from './dialogue/Dialogue';
import Section from './section/Section';
import Death from './death/Death';
import Epilogue from './epilogue/Epilogue';
import './Slide.css';

export default class Slide extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    let innerContent = "";
    if (this.props.slideType === 'cover') {
      innerContent = (
        <Cover/>
      );
    } else if (this.props.slideType === "epilogue") {
      innerContent = (
        <Epilogue />
      );
    } else if (this.props.slideType === 'dialogue') {
      innerContent = (
        <Dialogue words={this.props.dialogueWords}
                  source={this.props.dialogueSource}
                  link={this.props.dialogueLink}
        />
      );
    } else if (this.props.slideType === 'section') {
      innerContent = (
        <Section isPeopleSection={this.props.isPeopleSection}
                 sectionBGColor={this.props.sectionBGColor}
                 isReverse={this.props.isReverse}
                 categoryBGColor={this.props.categoryBGColor}
                 winnerBGColor={this.props.winnerBGColor}
                 class1={this.props.class1}
                 class2={this.props.class2}
                 winnerName={this.props.winnerName}
                 winnerLink={this.props.winnerLink}
                 director={this.props.director}
                 rating={this.props.rating}
                 ratingNum={this.props.ratingNum}
                 comment={this.props.comment}
                 commentAuthor={this.props.commentAuthor}
                 commentAuthorLink={this.props.commentAuthorLink}
                 candidates={this.props.candidates}
        />
      );
    } else if (this.props.slideType === "death") {
      innerContent = (
        <Death candidates={this.props.deathCandidates}/>
      );
    }
    return (
      <div className="slide">
        <div className="slide-background"
             style={{ backgroundImage: this.props.slideType === "cover" ? "" : `url(${this.props.bgImage})` }}
        >
          <div className="slide-wrapper">
            {innerContent}
          </div>
        </div>
      </div>
    );
  }
}