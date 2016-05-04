import React, { Component } from 'react';
import styles from './Room.styl';

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.handleJoinRoom = this.handleJoinRoom.bind(this);
  }

  handleJoinRoom() {
    this.props.joinRoom(this.props.rid);
  }

  render() {
    return (
      <div className={styles.room} onClick={this.handleJoinRoom} >
        <div className={styles.roomListInfo}>
          <div className={styles.roomListPic}>
            <img src={"https://graph.facebook.com/" + this.props.fid + "/picture?type=large"} />
          </div>
          <div className={styles.roomListName}>
            {this.props.name}
          </div>
          <div className={styles.roomListMasterName}>
            {this.props.master_name}
          </div>
        </div>
      </div>
    );
  }
}
