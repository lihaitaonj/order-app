import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div>Hello word</div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
