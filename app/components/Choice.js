import React, { Component } from 'react';
import styles from './Choice.styl';

export default class Choice extends Component {

  constructor(props) {
    super(props);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.subscribeRoom(this.refs.join.value);
    this.refs.join.value = "";
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.createRoom(this.refs.create.value);
    this.refs.create.value = "";
  }

  handleCancel(e) {
    this.props.cancel();
  }

  render() {
    return (
        <div className={styles.joinCreateRoom}>
          <div className={styles.joinChoice}>
            <form className={styles.joinContent} onSubmit={this.handleJoin}>
              <i className="fa fa-search-plus fa-3x" />
              <input ref="join" placeholder="Join existing room..." />
            </form>
          </div>
          <form className={styles.createChoice} onSubmit={this.handleCreate}>
            <div className={styles.createContent}>
              <i className="fa fa-home fa-3x" />
              <input ref="create" placeholder="Create your own..." />
            </div>
          </form>
          <div className={styles.cancel} onClick={this.handleCancel}>
            <svg width={40} height={40}>
              <circle cx="20" cy="20" r="15" style={{"fill": "none", "stroke": "#FFFFFF", "strokeWidth": "2", "strokeLinecap": "round"}}/>
              <path className={styles.crossOne} d="M 12.5 12.5 L 27.5 27.5" style={{"fill": "none", "stroke": "#FFFFFF", "strokeWidth": "3", "strokeLinecap": "round"}}/>
              <path className={styles.crossTwo} d="M 12.5 27.5 L 27.5 12.5" style={{"fill": "none", "stroke": "#FFFFFF", "strokeWidth": "3", "strokeLinecap": "round"}}/>
            </svg>
          </div>
        </div>
    );
  }
}
