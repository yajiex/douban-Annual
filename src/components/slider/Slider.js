import React from 'react';
import { Motion, spring } from 'react-motion';
import Slide from './slides/slide/Slide';
import './Slider.css';

const Slider = (props) => (
  <Motion style={{ y: spring(props.pageIndex) }}
          onRest={props.updatePageIndex}
  >
    {value =>
      <div className="Slider"
           onWheel={props.handleWheel}
           style={{
             transform: `translate3d(0, -${value.y * 100}%, 0)`
           }}
      >
        {
          props.metaData.map((data, index) => (
            <Slide {...data}
                   key={`slide${index}`}
            />
          ))
        }
      </div>
    }
  </Motion>
);

export default Slider;
