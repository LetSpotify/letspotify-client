import React, { Component } from 'react';
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
    // this.refs.toast.error(
    //   "Welcome welcome welcome!!",
    //   "You are now home my friend. Welcome home my friend.", {
    //   timeOut: 3000,
    //   extendedTimeOut: 1000,
    //   closeButton: true,
    // });
  }

  handleNewRoom(e) {
    this.props.newRoom();
  }

  render() {
    return (
      <div className={styles.roomMenu}>
        <div className={styles.roomFilter}>
          <div className={styles.inputWrapper}>
            <input id="filter" onChange={this.handleChange} placeholder="Room name..." />
          </div>
          <div className={styles.roomAdd} onClick={this.handleNewRoom}>
            <svg width={40} height={40}>
              <circle cx="20" cy="20" r="15" style={{"fill": "none", "stroke": "#FFFFFF", "strokeWidth": "2", "strokeLinecap": "round"}}/>
              <path className={styles.addOne} d="M 20 10 L 20 30" style={{"fill": "none", "stroke": "#FFFFFF", "strokeWidth": "3", "strokeLinecap": "round"}}/>
              <path className={styles.addTwo} d="M 10 20 L 30 20" style={{"fill": "none", "stroke": "#FFFFFF", "strokeWidth": "3", "strokeLinecap": "round"}}/>
            </svg>
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
        </div>
      </div>
    );
  }
}
