import React from 'react';
import Left from './left/Left';
import Right from './right/Right';
import './Header.css';

const Header = () => (
  <div className="header">
    <Left />
    <Right />
  </div>
);

export default Header;
