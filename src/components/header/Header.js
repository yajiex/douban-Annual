import React from 'react';
import Left from './left/Left';
import Right from './right/Right';
import './Header.css';

const Header = (props) => (
  <header className="header">
    <Left isMobile={props.isMobile}/>
    <Right isMobile={props.isMobile}/>
  </header>
);

export default Header;
