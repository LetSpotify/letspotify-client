import React, { Component } from 'react';
import styles from './Login.styl';
const shell = require('electron').shell;
const oauthUrl = 'https://api.letspotify.com/auth/facebook/login'


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);

    var that = this;
    var validateToken = setInterval(function () {
      if (that.props.loginInfo.token !== "") {
        shell.openExternal(oauthUrl + '?token=' + that.props.loginInfo.token);
        setTimeout(function() {
          console.log('token expire');
          that.props.tokenExpire();
        }, 1000 * 60 * 3);
        var getCookie = setInterval(function () {
          if (!that.props.loginInfo.login) {
            console.log('checking');
            that.props.checkAuthToken(that.props.loginInfo.token);
          } else if (that.props.loginInfo.login){
            console.log('login success');
            that.props.getCookie(that.props.loginInfo.token);
            clearInterval(getCookie);
          }
        }, 1000);
        console.log('start checking');
        clearInterval(validateToken);
      }
      console.log('login first');
    }, 1000);
  }

  handleLogin(e) {
    // shell.openExternal('https://github.com');
    if (this.props.status === "login") {
      this.props.loginPending();
      this.props.getAuthToken();
    }
  }

  handleClick(e) {
    console.log('click');
  }

  render() {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <div className={styles.cardTopSkew}>
          </div>
          <div className={styles.loginSection}>
            <h3 onClick={this.handleClick}>{this.props.status === "login" ? "Login to continue....." : "Please wait"}</h3>
            <div className={this.props.status === "login" ? styles.loginButton : styles.loginPending} onClick={this.handleLogin}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
