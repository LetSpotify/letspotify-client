import React, { Component } from 'react';
import styles from './RoomChat.styl';
import { MdShare, MdSettings, MdSend } from 'react-icons/lib/md';
import ReactTooltip from 'react-tooltip';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class RoomChat extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.message.value);
    this.refs.message.value = "";
  }

  render() {
    return (
      <div className={styles.roomChat}>
        <div className={styles.chatStatus}>
          <div className={styles.masterInfo}></div>
          <div className={styles.roomName}></div>
          <div className={styles.controls}>
            <CopyToClipboard text={this.props.curRoomID}>
              <MdShare data-tip data-delay-show='200' data-for='share'/>
            </CopyToClipboard>
            <ReactTooltip id='share' place='left' effect='solid'>
              <span>Copy Room ID</span>
            </ReactTooltip>
            <MdSettings />
          </div>
        </div>
        <div className={styles.chatContent}>
          <span>Chat room comming soon...</span>
        </div>
        <form onSubmit={this.handleSubmit} className={styles.chatInput}>
          <input ref='message' placeholder='New message'></input>
          <MdSend onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
