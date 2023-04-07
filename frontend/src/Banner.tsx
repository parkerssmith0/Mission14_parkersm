import React from 'react';
import styles from './Banner.module.css';
import './myFancyCss.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="topnav">
        <a href="/">Home</a>
        <a href="/Podcast">Podcast</a>
        <a href="/MovieList">Movie List</a>
      </div>
    </>
  );
}

export default TopBanner;
