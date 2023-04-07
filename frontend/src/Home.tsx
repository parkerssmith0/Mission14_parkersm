import React from 'react';
import styles from './Banner.module.css';

function Home(props: any) {
  return (
    <div className={styles.center}>
      <div>
        <img src="./JoelHiltonHeadshot.jpg" alt="JoelHilton" />
      </div>
      <div>
        <h1 className={styles.h1}>{props.title}</h1>
      </div>
      <br />
      <p>
        This is The Joel Hilton's famous movie list site. Feel free to look
        around at the podcast and collection of movies
      </p>
    </div>
  );
}

export default Home;
