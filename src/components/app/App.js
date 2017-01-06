import React, { Component }  from 'react';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Navigator from '../navigator/Navigator';
import metaData from '../../data/data';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.metaData = metaData().metaData;
    this.handleWheel = this.handleWheel.bind(this);
    this.handleNavigatorClick = this.handleNavigatorClick.bind(this);
    this.updatePageIndex = this.updatePageIndex.bind(this);
    this.isMobile = this.detectMobile();
    this.startTouchY = 0;
    this.SCREEN_HEIGHT = document.documentElement.clientHeight;
    this.SCROLL_THRESHOLD = this.SCREEN_HEIGHT / 10;
    this.state = {
      prevPageIndex: 0,
      curPageIndex: 0,
      scrollHeight: 0,
    };
  }

  componentDidMount() {
    window.onhashchange = () => {
      this.navigate(parseInt(location.hash.substr(1), 10));
    };

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38 /* UP */) {
        this.navigate(this.state.prevPageIndex - 1);
      } else if (e.keyCode === 40 /* DOWN */) {
        this.navigate(this.state.prevPageIndex + 1);
      }
    });

    document.addEventListener('touchstart', this.handleTouchStart.bind(this));
    document.addEventListener('touchmove', this.handleTouchMove.bind(this));
    document.addEventListener('touchend', this.handleTouchEnd.bind(this));
  }

  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  navigate(pageIndex, scrollHeight = 0) {
    if ((this.state.prevPageIndex === this.state.curPageIndex) && (pageIndex >= 0) && (pageIndex < this.metaData.length)) {
      this.setState({
        prevPageIndex: pageIndex,
        scrollHeight: scrollHeight
      });
    }
  }

  handleTouchStart(e) {
    this.startTouchY = e.changedTouches[0].clientY;
  }

  handleTouchMove(e) {
    e.stopPropagation();
    const newTouchY = e.changedTouches[0].clientY;
    this.navigate(this.state.prevPageIndex, newTouchY - this.startTouchY);
  }

  handleTouchEnd() {
    this.startTouchY = 0;
    const computedScrollHeight = Math.abs(this.state.scrollHeight) > this.SCROLL_THRESHOLD ? this.state.scrollHeight : 0;
    this.navigate(this.state.prevPageIndex - Math.sign(computedScrollHeight));
  }

  handleWheel(e) {
    this.navigate(e.deltaY > 0 ? this.state.prevPageIndex + 1 : this.state.prevPageIndex - 1);
  }

  handleNavigatorClick() {
    this.navigate(this.state.prevPageIndex + 1);
  }

  updatePageIndex() {
    this.setState({ curPageIndex: this.state.prevPageIndex });
    location.hash = `#${this.state.curPageIndex}`;
  }

  render() {
    return (
      <div>
        <div className="root">
          <Header isMobile={this.isMobile}/>
          <Slider isMobile={this.isMobile}
                  metaData={this.metaData}
                  pageIndex={this.state.prevPageIndex}
                  updatePageIndex={this.updatePageIndex}
                  handleWheel={this.handleWheel}
                  scrollHeight={this.state.scrollHeight}
                  rootHeight={this.SCREEN_HEIGHT}
          />
          <Navigator isMobile={this.isMobile}
                     onClick={this.handleNavigatorClick}
          />
        </div>
      </div>
    );
  }
}
