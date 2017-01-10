import React from 'react';
import Left from './left/Left';
import Right from './right/Right';
import './Header.css';

const Header = (props) => (
  <header className="header">
    <Left isMobile={props.isMobile}/>
    <Right isMobile={props.isMobile}
           metaData={props.metaData}
           pageIndex={props.pageIndex}
           catalogExpand={props.catalogExpand}
           handleCatalogClick={props.handleCatalogClick}
           handleCatalogButtonClick={props.handleCatalogButtonClick}
    />
  </header>
);

export default Header;
