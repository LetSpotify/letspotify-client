import React, { Component } from 'react';
import styles from './RoomChat.styl';

export default class RoomChat extends Component {

  constructor(props) {
    super(props);
  }

  handleLeave(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.roomChat}>
        <div className={styles.ChatStatus}>
        </div>
        <div className={styles.ChatContent}>
          <span>Chat room comming soon...</span>
        </div>
        <div className={styles.ChatInput}></div>
      </div>
    );
  }
}
