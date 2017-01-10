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
    this.handleCatalogClick = this.handleCatalogClick.bind(this);
    this.handleCatalogButtonClick = this.handleCatalogButtonClick.bind(this);
    this.updatePageIndex = this.updatePageIndex.bind(this);
    this.isMobile = this.detectMobile();
    this.startTouchY = 0;
    this.SCREEN_HEIGHT = document.documentElement.clientHeight;
    this.SCROLL_THRESHOLD = this.SCREEN_HEIGHT / 10;
    this.state = {
      prevPageIndex: 0,
      curPageIndex: 0,
      scrollHeight: 0,
      catalogExpand: false,
    };
  }

  componentDidMount() {
    window.onload = () => {
      const index = this.getIndexFromHash();
      if (index) {
        this.navigate(index);
      }
    };

    window.onhashchange = () => {
      this.navigate(this.getIndexFromHash());
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

  getIndexFromHash() {
    return parseInt(location.hash.substr(1), 10);
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
    const scrollAreasVertical = [].slice.call(document.querySelectorAll("[data-scroll=free]"));
    const touchVerticalScrollArea = scrollAreasVertical.some((targets) => targets.contains(e.target));
    const scrollAreasHorizontal = [].slice.call(document.querySelectorAll("[data-scroll=limited]"));
    const touchHorizontalScrollArea = scrollAreasHorizontal.some((targets) => targets.contains(e.target));
    if (!touchVerticalScrollArea && !touchHorizontalScrollArea) {
      e.preventDefault();
    }

    this.navigate(this.state.prevPageIndex, e.changedTouches[0].clientY - this.startTouchY);
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
    this.setState({ catalogExpand: false });
    this.navigate(this.state.prevPageIndex + 1);
  }

  handleCatalogClick(index) {
    this.navigate(index);
  }

  handleCatalogButtonClick() {
    this.setState({ catalogExpand: !this.state.catalogExpand });
  }

  updatePageIndex() {
    this.setState({ curPageIndex: this.state.prevPageIndex });
    location.hash = `#${this.state.curPageIndex}`;
  }

  getCatalogData() {
    let dialogueIndex = 0;
    return this.metaData.map((data) => {
      if (data.class1) {
        return data.class2 ? data.class1 + data.class2 : data.class1;
      } else if (data.slideType === "dialogue") {
        return `台词${++dialogueIndex}`;
      } else if (data.slideType === "cover") {
        return "开篇";
      } else if (data.slideType === "epilogue") {
        return "结束页";
      } else {
        return "";
      }
    });
  }

  render() {
    const start = Math.max(0, this.state.prevPageIndex - 1);
    const end = Math.min(this.state.prevPageIndex + 2, this.metaData.length);
    const metaData = Array.from({ length: this.metaData.length }, (e, i) => (start <= i && i < end) ? this.metaData[i] : null);
    return (
      <div>
        <div className="root">
          <Header isMobile={this.isMobile}
                  metaData={this.getCatalogData()}
                  pageIndex={this.state.prevPageIndex}
                  catalogExpand={this.state.catalogExpand}
                  handleCatalogClick={this.handleCatalogClick}
                  handleCatalogButtonClick={this.handleCatalogButtonClick}
          />
          <Slider isMobile={this.isMobile}
                  metaData={metaData}
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
