import React, { Component } from 'react';
import styles from './PlayInfo.styl';
import $ from 'jquery';
var width = require('text-width');

export default class PlayInfo extends Component {

  constructor(props) {
    super(props);
    this.handleNameHover = this.handleNameHover.bind(this);
  }

  handleNameHover(e) {
    const targetWidth = e.target.getBoundingClientRect().width;
    if (targetWidth > 180 && !$(e.target).is(':animated')) {
      $(e.target).animate({
        'margin-left': -(targetWidth + width("   ", {
          family: "pingfang sc",
          size: e.target === this.refs.songName ? 19 : 14
        }))
      }, ((targetWidth) / 25) * 1000, 'linear', function() {
        $(this).css('margin-left', 0);
      });
    }
  }

  render() {

    const songNameRepeat = width(this.props.playInfo.name, {
      family: "pingfang sc",
      size: 19
    }) > 180;

    const albumNameRepeat = this.props.playInfo.album ? width(this.props.playInfo.album.name, {
      family: "pingfang sc",
      size: 14
    }) > 180 : false;

    const singerNameRepeat = this.props.playInfo.artists ? width(this.props.playInfo.artists[0].name, {
      family: "pingfang sc",
      size: 14
    }) > 180 : false;

    return (
      <div className={styles.roomInfo}>
        <div className={styles.playInfo}>
          <div className={styles.playPic}>
            <img src={this.props.playInfo.album ? this.props.playInfo.album.images[1].url : ""} />
          </div>
          <div className={styles.songName}>
            <span ref="songName"  onMouseOver={this.handleNameHover}>
              {this.props.playInfo.name}
            </span>
            &nbsp;
            &nbsp;
            {
              songNameRepeat ?
                <span>
                  {this.props.playInfo.name}
                </span> :
                <div></div>
            }
          </div>
          <div ref="albumName" className={styles.albumName}>
            <span onMouseOver={this.handleNameHover}>
              {this.props.playInfo.album ? this.props.playInfo.album.name : ""}
            </span>
            &nbsp;
            &nbsp;
            {
              albumNameRepeat ?
              <span>
                {this.props.playInfo.album.name}
              </span> :
              <div></div>
            }
          </div>
          <div ref="singerName" className={styles.singerName}>
            <span onMouseOver={this.handleNameHover}>
              {this.props.playInfo.artists ? this.props.playInfo.artists[0].name : ""}
            </span>
            &nbsp;
            &nbsp;
            {
              singerNameRepeat ?
              <span>
                {this.props.playInfo.artists[0].name}
              </span> :
              <div></div>
            }
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
