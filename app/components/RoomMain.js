import React, { Component } from 'react';
import styles from './RoomMain.styl';

import PlayInfo from './Playinfo';
import RoomChat from './RoomChat';

export default class RoomMain extends Component {

  constructor(props) {
    super(props);
    this.props.getRoomInfo(this.props.curRoomID);
  }
  render() {
    return (
      <div className={styles.roomMain}>
        <PlayInfo {...this.props} />
        <RoomChat {...this.props} />
      </div>
    );
  }
}
