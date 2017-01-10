import React from 'react';
import Catalog from './catalog/Catalog';
import './Right.css';
import music from './p2694025_64k.mp4';

const Right = (props) => {
  const musicPart = props.isMobile ? null : (
      <div className="header-right-music">
        <img className="header-right-music-icon"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAABGdBTUEAALGPC/xhBQAAAF1JREFUSA3tlcEKACAIQzX8/1+ujrLLEMXTPDWyiU8kt2LcH/mJ/8ianQ9LmL5XwWmiJqTjSGPcEQxxbzVDANSXQtpnCA7rSAP3pPq/QQNUrneognQm1QQhrRKj+Q9prwww1XTWTQAAAABJRU5ErkJggg=="
             alt="music icon"
        />
        <span className="header-right-music-title">播放背景音乐</span>
        <audio src={music}/>
      </div>
    );
  return (
    <div className="header-right">
      {musicPart}
      <aside className="header-right-catalog">
        <button className={props.catalogExpand ? "catalog-expand" : ""}
                onClick={props.handleCatalogButtonClick}
        >
          <div className="icon-doulist">目录</div>
        </button>
        {
          props.catalogExpand ? (
              <Catalog metaData={props.metaData}
                       pageIndex={props.pageIndex}
                       handleCatalogClick={props.handleCatalogClick}
              />
            ) : null
        }
      </aside>
    </div>
  );
};

export default Right;
