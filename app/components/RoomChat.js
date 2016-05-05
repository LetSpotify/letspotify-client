import React, { Component } from 'react';
import styles from './RoomChat.styl';
import CopyToClipboard from 'react-copy-to-clipboard';

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
          <CopyToClipboard className="status copy" text={this.props.curRoomID}>
            <button>Copy Room ID</button>
          </CopyToClipboard> 
        </div>
        <div className={styles.ChatContent}>
          <span>Chat room comming soon...</span>
        </div>
        <div className={styles.ChatInput}></div>
      </div>
    );
  }
}
