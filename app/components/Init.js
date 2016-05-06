import React, { Component } from 'react';
import styles from './Init.styl';
const ipcRenderer = require('electron').ipcRenderer;

export default class Home extends Component {

  constructor(props) {
    super(props);
    ipcRenderer.send('getLocalSpotifyStatus', this.props.curRoomID);
  }


  render() {
    return (
      <div className={styles.container}>
        <div className={styles.initialize}>
          <span>Initializing application</span>
          <div className={styles.circle}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
