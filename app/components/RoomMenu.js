import React, { Component } from 'react';
import { MdAddCircleOutline } from 'react-icons/lib/md';
import styles from './RoomMenu.styl';

import Room from './Room';

export default class RoomMenu extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewRoom = this.handleNewRoom.bind(this);
    this.props.getUserInfo();
    this.props.getUserRoomList();
  }

  handleChange(e) {
    e.preventDefault();
    this.props.filterRoomList(e.target.value);
  }

  handleNewRoom(e) {
    this.props.newRoom();
  }

  render() {
    return (
      <div className={styles.roomMenu}>
        <div className={styles.roomFilter}>
          <div className={styles.inputWrapper}>
            <input id="filter" onChange={this.handleChange} placeholder="Filter Room..." />
          </div>
        </div>
        <div className={styles.roomList}>
          {
            this.props.showList.map((value, index) => {
              var passprops = {
                ...value,
                joinRoom: this.props.joinRoom
              }
              return (
                <Room key={index} {...passprops}/>
              )
            })
          }
          <div className={styles.roomAdd} onClick={this.handleNewRoom}>
            <MdAddCircleOutline />
            <span>New room</span>
          </div>
        </div>
      </div>
    );
  }
}
