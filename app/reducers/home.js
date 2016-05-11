import {
  handleActions
} from 'redux-actions';


const initialState = {
  curRoomID: "",
  userInfo: {},
  menuOpen: false,
  status: "login-init",
  roomList: [
  ],
  showList: [
  ],
  role: "",
  roomInfo: {},
  remotePlayStatus: {},
  localPlayStatus: {},
  playInfo: {},
  loginInfo: {
    token: "",
    login: false
  },
  spotifyInfo: {
    oauth: "",
    csrf: "",
    port: 4370
  },
  msg: "",
  socket: {}
}

function inRoomList(list, roomID) {
  for (var room of list) {
    if (room === roomID) {
      return room;
    }
  }
  return "";
}

function filterRoom(list, str) {
  var newList = [];
  for (var room of list) {
    if (room.name.slice(0, str.length).toLowerCase() === str.toLowerCase()) {
      newList.push(room);
    }
  }
  return newList;
}

export default handleActions({

  NEW_ROOM: (state, action) => {
    return {
      ...state,
      status: "newRoom"
    };
  },
  CANCEL: (state, action) => {
    return {
      ...state,
      status: "menu"
    };
  },
  JOIN_ROOM: (state, action) => {
    return {
      ...state,
      status: "inRoom",
      curRoomID: action.payload
    }
  },
  SUBSCRIBE_ROOM: {
    next(state, action) {
      return ({
        ...state,
        curRoomID: action.payload.success ? action.payload.data.rid : "",
        status: action.payload.success ? "inRoom" : state.status
      });
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  CREATE_ROOM: {
    next(state, action) {
      return {
        ...state,
        curRoomID: action.payload.success ? action.payload.data.rid : "",
        status: action.payload.success ? "inRoom" : state.status,
        msg: action.payload.success ? "" : action.payload.msg
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  FILTER_ROOM_LIST: (state, action) => {
    return {
      ...state,
      showList: filterRoom(state.roomList, action.payload)
    };
  },
  UPDATE_LOCAL_PLAY_STATUS: {
    next(state, action) {
      return {
        ...state,
        localPlayStatus: action.payload
      }
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  SEND_PLAY_STATUS: (state, action) => {
    return {
      ...state,
    }
  },
  GET_ROOM_INFO: {
    next(state, action) {
      return {
        ...state,
        role: action.payload.success && state.status === "inRoom" ? (action.payload.data.fid === state.userInfo.fid ? "master" : "client") : "",
        roomInfo: action.payload.success ? action.payload.data : {},
        msg: action.payload.success ? "" : action.payload.msg
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  GET_REMOTE_PLAY_STATUS: {
    next(state, action) {
      return {
        ...state,
        remotePlayStatus: action.payload.success ? action.payload.data : {}
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  GET_PLAY_INFO: {
    next(state, action) {
      return {
        ...state,
        playInfo: action.payload
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  LEAVE_ROOM: (state, action) => {
    return {
      ...state,
      curRoomID: "",
      role: "",
      roomInfo: {},
      remotePlayStatus: {},
      playInfo: {},
      status: "menu"
    }
  },
  GET_AUTH_TOKEN: {
    next(state, action) {
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          token: action.payload.success ? action.payload.data.token : ""
        },
        msg: action.payload.success ? "" : action.payload.msg
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  LOGIN_PENDING: (state, action) => {
    return {
      ...state,
      status: "login-pending"
    }
  },
  CHECK_AUTH_TOKEN: {
    next(state, action) {
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          login: action.payload.success ? action.payload.data.login : false,
        },
        msg: action.payload.success ? "" : action.payload.msg
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  GET_COOKIE: {
    next(state, action) {
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          login: action.payload.success ? true : false
        },
        status: action.payload.success ? "menu" : "login",
        msg: action.payload.success ? "" : action.payload.msg
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  GET_USER_INFO: {
    next(state, action) {
      return {
        ...state,
        userInfo: action.payload.success ? action.payload.data : {},
        msg: action.payload.success ? "" : action.payload.msg
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  GET_USER_ROOM_LIST: {
    next(state, action) {
      return {
        ...state,
        roomList: action.payload.success ? action.payload.data.master.concat(action.payload.data.subscribe) : [],
        showList: action.payload.success ? action.payload.data.master.concat(action.payload.data.subscribe) : [],
        msg: action.payload.success ? "" : action.payload.msg
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  },
  LOGOUT: (state, action) => {
    return {
      ...initialState,
      status: "login"
    }
  },
  TOKEN_EXPIRE: (state, action) => {
    return {
      ...state,
      loginInfo: {
        ...state.loginInfo,
        token: ""
      },
      status: state.status.slice(0, 5) === "login" ? "login" : state.status
    }
  },
  GET_SPOTIFY_OAUTH_TOKEN: (state, action) => {
    return {
      ...state,
      spotifyInfo: {
        ...state.spotifyInfo,
        oauth: action.payload.t ? action.payload.t : ""
      }
    };
  },
  GET_SPOTIFY_CSRF_TOKEN: (state, action) => {
    return {
      ...state,
      spotifyInfo: {
        ...state.spotifyInfo,
        csrf: action.payload.token ? action.payload.token : "",
        port: action.payload.port ? action.payload.port : 0
      }
    };
  },
  LOCAL_STATUS_ERROR: (state, action) => {
    return {
      ...state,
      status: !action.payload.running ? "login-restart" : state.status,
      role: "",
      msg: !action.payload.running ? action.payload.error.message : ""
    };
  },
  INIT_SUCCESS: (state, action) => {
    return {
      ...state,
      status: "login"
    };
  },
  TOGGLE_USER_MENU: (state, action) => {
    return {
      ...state,
      menuOpen: !state.menuOpen
    }
  },
  CLOSE_USER_MENU: (state, action) => {
    return {
      ...state,
      menuOpen: false
    }
  },
  default: {
    next(state, action) {
      return {
        ...state
      };
    },
    throw(state, action) {
      return {
        ...state
      };
    },
  }
}, initialState)
