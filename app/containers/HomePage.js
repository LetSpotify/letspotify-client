import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/home';
import CopyToClipboard from 'react-copy-to-clipboard';
const remote = require('remote');


export default class HomePage extends Component {


  constructor(props) {
    super(props);
    this.handleQuit = this.handleQuit.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleUserMenu = this.handleUserMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    window.addEventListener('click', this.handleCloseMenu);
  }

  handleQuit(e) {
    e.preventDefault();
    remote.getCurrentWindow().close();
  }

  handleCloseMenu(e) {
    if (e.target !== this.refs.menuToggle) {
      this.props.closeUserMenu();
    }
  }

  handleMinimize(e) {
    e.preventDefault();
    remote.getCurrentWindow().minimize();
  }

  handleFullScreen(e) {
    e.preventDefault();
  }

  handleUserMenu(e) {
    this.props.toggleUserMenu();
  }

  render() {
    return (
      <div>
        <div className="windowNav">
          <div className="windowControl">
          </div>
          <div className="windowStatus">
            <div className="windowTitle">
              <div className="status"></div>
            </div>
            <div className="windowUserSection">
              {
                this.props.status.slice(0, 5) !== "login" ?
                <div className="userInfo">
                  <span>{this.props.userInfo.name}</span>
                  <img src={"https://graph.facebook.com/" +this.props.userInfo.fid + "/picture?type=large"} className="userPic"></img>
                  <i ref='menuToggle' onBlur={this.handleUserMenu} onClick={this.handleUserMenu} className="toggleMenu fa fa-chevron-down" />
                  {
                    this.props.menuOpen ?
                      <div className="userMenu">
                        <div onClick={this.props.logout} className="userMenuItem">Logout</div>
                      </div> :
                      <div></div>
                  }
                </div> :
                <div className="nothing"></div>
              }
            </div>
          </div>
        </div>
        <Home {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.home.userInfo,
    menuOpen: state.home.menuOpen,
    status: state.home.status,
    curRoomID: state.home.curRoomID,
    roomList: state.home.roomList,
    showList: state.home.showList,
    role: state.home.role,
    roomInfo: state.home.roomInfo,
    remotePlayStatus: state.home.remotePlayStatus,
    localPlayStatus: state.home.localPlayStatus,
    playInfo: state.home.playInfo,
    loginInfo: state.home.loginInfo,
    msg: state.home.msg,
    socket: state.socket
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
