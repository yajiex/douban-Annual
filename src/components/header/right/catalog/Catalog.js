import React from 'react';
import './Catalog.css';

const Catalog = (props) => (
  <nav data-scroll="free">
    <ul>
      {
        props.metaData.map((data, index) => (
          <li className={props.pageIndex === index ? "catalog-current icon-indicator" : ""}
              key={`catalog${index}`}
          >
            <a onClick={() => props.handleCatalogClick(index)}>{data}</a>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default Catalog;