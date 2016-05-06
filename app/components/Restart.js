import React, { Component } from 'react';
import styles from './Restart.styl';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={styles.container}>
        <div className={styles.restart}>
          <span>Please open Spotify then restart the application</span>
        </div>
      </div>
    );
  }
}
