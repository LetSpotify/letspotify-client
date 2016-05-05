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
            <svg width={200} height={190}>
              <circle cx="100" cy="100" r="85" style={{"fill": "none", "stroke": "#22272C", "strokeWidth": "4", "strokeLinecap": "round"}}/>
              <path className={styles.addOne} d="M 100 50 L 100 150" style={{"fill": "none", "stroke": "#22272C", "strokeWidth": "7", "strokeLinecap": "round"}}/>
              <path className={styles.addTwo} d="M 50 100 L 150 100" style={{"fill": "none", "stroke": "#22272C", "strokeWidth": "7", "strokeLinecap": "round"}}/>
            </svg>
            <span>New room</span>
          </div>
        </div>
      </div>
    );
  }
}
