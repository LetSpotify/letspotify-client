import React, { Component } from 'react';
import styles from './PlayInfo.styl';

export default class PlayInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.roomInfo}>
        <div className={styles.playInfo}>
          <div className={styles.playPic}>
            <img src={Object.keys(this.props.playInfo).length ? this.props.playInfo.album.images[1].url : ""} />
          </div>
          <div className={styles.songName}>
            {this.props.playInfo.name}
          </div>
          <div className={styles.albumName}>
            {Object.keys(this.props.playInfo).length ? this.props.playInfo.album.name : ""}
          </div>
          <div className={styles.singerName}>
            {Object.keys(this.props.playInfo).length ? this.props.playInfo.artists[0].name : ""}
          </div>
        </div>
        <ul className={styles.members}>
        </ul>
        <div className={styles.leaveRoom} onClick={this.props.leaveRoom}>
          <div>Leave</div>
        </div>
      </div>
    );
  }
}
