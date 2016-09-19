import React, { Component } from 'react';
import styles from './RoomMain.styl';
import io from 'socket.io-client';

import PlayInfo from './Playinfo';
import RoomChat from './RoomChat';



export default class RoomMain extends Component {

  constructor(props) {
    super(props);
    this.props.getRoomInfo(this.props.curRoomID);
  }

  componentDidMount() {
    console.log('mount');
  }

  componentWillUnmount() {
    console.log('unmount');
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
