import React, { Component } from 'react';
import styles from './Home.styl';
import {
  ToastContainer,
  ToastMessage,
} from "react-toastr";

import RoomMenu from './RoomMenu';
import Choice from './Choice';
import RoomMain from './RoomMain';
import Login from './Login';
import Init from './Init';
import Restart from './Restart';

const ipcRenderer = require('electron').ipcRenderer;
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class Home extends Component {

  constructor(props) {
    super(props);
    const handleLocalStatus = this.handleLocalStatus.bind(this);
    const handleLocalStatusError = this.handleLocalStatusError.bind(this);
    ipcRenderer.on('local-status-running', function(event, localStatus, rid) {
      handleLocalStatus(localStatus, rid);
    });
    ipcRenderer.on('local-status-error', function(event, error) {
      handleLocalStatusError(error);
    })
    const intervalJob = this.intervalJob.bind(this);
    setInterval(function () {
      intervalJob();
    }, 1000);

  }

  handleLocalStatusError(error) {
    if (error.error) {
      this.props.localStatusError(error);
    }
  }

  handleLocalStatus(localStatus, rid) {
    if (this.props.status.slice(0, 5) !== "login") {
      const currentLocalStatus = this.props.localPlayStatus;
      const current = currentLocalStatus.time - currentLocalStatus.position;
      const local = localStatus.time - localStatus.position;
      const needSync = Math.abs(current - local) > 5;
      if (currentLocalStatus.uri !== localStatus.uri || currentLocalStatus.playing !== localStatus.playing || needSync) {
        this.props.updateLocalPlayStatus(localStatus);
        var sendStatus = localStatus;
        sendStatus.rid = rid;
        this.props.sendLocalPlayStatus(sendStatus);
      }
    } else if (this.props.status === 'login-init') {
      this.props.initSuccess();
    }
  }

  intervalJob() {

    if (this.props.role === "master") {
      ipcRenderer.send('getLocalSpotifyStatus', this.props.curRoomID);
      if (!Object.keys(this.props.playInfo).length && this.props.playInfo.uri || this.props.localPlayStatus.uri !== this.props.playInfo.uri) {
        this.props.getPlayInfo(this.props.localPlayStatus.uri.split(":")[2]);
      }
    } else if (this.props.role === "client") {
      this.props.getRemotePlayStatus(this.props.roomInfo.rid);
      if (Object.keys(this.props.remotePlayStatus).length) {
        ipcRenderer.send('playerControl', this.props.remotePlayStatus);
      }
      if (!Object.keys(this.props.playInfo).length && this.props.playInfo.uri || this.props.remotePlayStatus.uri !== this.props.playInfo.uri) {
        this.props.getPlayInfo(this.props.remotePlayStatus.uri.split(":")[2]);
      }
    } else {
      console.log('not in room');
    }
  }

  render() {

    return (
      <div className={styles.container}>
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="toast"
          className="toast-top-right"
        />
        {
          this.props.status === "login-init" ?
          <Init {...this.props} /> :
            this.props.status === "login-restart" ?
            <Restart /> :
              this.props.status.slice(0, 5) === "login" ?
              <Login {...this.props} /> :
                this.props.status === "newRoom" ?
                  <Choice {...this.props}/> :
                  this.props.status === "menu" ?
                    <RoomMenu {...this.props} /> :
                    this.props.status === "inRoom" ?
                      <RoomMain {...this.props} /> :
                      <div>{this.props.status}</div>
        }
      </div>
    );
  }
}
