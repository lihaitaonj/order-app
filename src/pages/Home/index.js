import React from 'react';

import styles from './index.scss';

const index = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>欢迎光临</h1>
        <h2>这里有各式美食等你选择！</h2>
      </div>
    </div>
  );
}

export default index;
