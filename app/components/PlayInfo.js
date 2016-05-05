import React, { Component } from 'react';
import styles from './PlayInfo.styl';
import $ from 'jquery';

export default class PlayInfo extends Component {

  constructor(props) {
    super(props);
    this.handleNameHover = this.handleNameHover.bind(this);
  }

  handleNameHover(e) {
    const width = e.target.getBoundingClientRect().width;
    if (width > 230 && !$(e.target).is(':animated')) {
      $(e.target).animate({
        'margin-left': -(width + 20)
      }, ((width + 20) / 25) * 1000, 'linear', function() {
        $(this).css('margin-left', width - 40);
        $(this).animate({
          'margin-left': 0
        }, ((width - 40) / 25) * 1000, 'linear', function() {
        });
      });
    }
  }

  render() {
    return (
      <div className={styles.roomInfo}>
        <div className={styles.playInfo}>
          <div className={styles.playPic}>
            <img src={Object.keys(this.props.playInfo).length ? this.props.playInfo.album ? this.props.playInfo.album.images[1].url : "" : ""} />
          </div>
          <div className={styles.songName}>
            <span onMouseOver={this.handleNameHover}>
              {this.props.playInfo.name}
            </span>
          </div>
          <div className={styles.albumName}>
            <span onMouseOver={this.handleNameHover}>
              {Object.keys(this.props.playInfo).length ? this.props.playInfo.album ? this.props.playInfo.album.name : "" : ""}
            </span>
          </div>
          <div className={styles.singerName}>
            <span onMouseOver={this.handleNameHover}>
              {Object.keys(this.props.playInfo).length ? this.props.playInfo.artists ? this.props.playInfo.artists[0].name : "" : ""}
            </span>
          </div>
        </div>
        <ul className={styles.members}>
        </ul>
        <div className={styles.leaveRoom} onClick={this.props.leaveRoom}>
          <span>Leave</span>
        </div>
      </div>
    );
  }
}
