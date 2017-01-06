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
    this.state = {
      prevPageIndex: 0,
      curPageIndex: 0
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
  }

  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  navigate(pageIndex) {
    if ((this.state.prevPageIndex === this.state.curPageIndex) && (pageIndex >= 0) && (pageIndex < this.metaData.length)) {
      this.setState({ prevPageIndex: pageIndex });
    }
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
          />
          <Navigator isMobile={this.isMobile}
                     onClick={this.handleNavigatorClick}
          />
        </div>
      </div>
    );
  }
}
