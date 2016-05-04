import { createAction } from 'redux-actions';
import WebAPIUtil from '../utils/WebAPIUtil.js';

export const createRoom = createAction('CREATE_ROOM', WebAPIUtil.createRoom);
export const joinRoom = createAction('JOIN_ROOM');
export const subscribeRoom = createAction('SUBSCRIBE_ROOM', WebAPIUtil.subscribeRoom);
export const filterRoomList = createAction('FILTER_ROOM_LIST');
export const getRoomInfo = createAction('GET_ROOM_INFO', WebAPIUtil.getRoomInfo);
export const getRemotePlayStatus = createAction('GET_REMOTE_PLAY_STATUS', WebAPIUtil.getStatus);
export const leaveRoom = createAction('LEAVE_ROOM');
export const getPlayInfo = createAction('GET_PLAY_INFO', WebAPIUtil.getInfo);
export const newRoom = createAction('NEW_ROOM');
export const cancel = createAction('CANCEL');
export const getAuthToken = createAction('GET_AUTH_TOKEN', WebAPIUtil.getAuthToken);
export const checkAuthToken = createAction('CHECK_AUTH_TOKEN', WebAPIUtil.checkAuthToken);
export const getCookie = createAction('GET_COOKIE', WebAPIUtil.getCookie);
export const getUserInfo = createAction('GET_USER_INFO', WebAPIUtil.getUserInfo);
export const logout = createAction('LOGOUT');
export const tokenExpire = createAction('TOKEN_EXPIRE');
export const loginPending = createAction('LOGIN_PENDING');
export const getUserRoomList = createAction('GET_USER_ROOM_LIST', WebAPIUtil.getUserRoomList);
export const sendLocalPlayStatus = createAction('SEND_LOCAL_PLAY_STATUS', WebAPIUtil.sendInfo);

export const getSpotifyOAuthToken = createAction('GET_SPOTIFY_OAUTH_TOKEN');
export const getSpotifyCSRFToken = createAction('GET_SPOTIFY_CSRF_TOKEN');
export const updateLocalPlayStatus = createAction('UPDATE_LOCAL_PLAY_STATUS');
