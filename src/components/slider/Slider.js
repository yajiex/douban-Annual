import React from 'react';
import { Motion, spring } from 'react-motion';
import Slide from './slides/slide/Slide';
import './Slider.css';

const Slider = (props) => (
  <Motion style={{ y: spring(props.pageIndex * props.rootHeight - props.scrollHeight) }}
          onRest={props.updatePageIndex}
  >
    {value =>
      <div className="slider"
           onWheel={props.handleWheel}
           style={{
             transform: `translate3d(0, -${value.y}px, 0)`
           }}
      >
        {
          props.metaData.map((data, index) => (
            <Slide {...data}
                   isMobile={props.isMobile}
                   key={`slide${index}`}
            />
          ))
        }
      </div>
    }
  </Motion>
);

export default Slider;
