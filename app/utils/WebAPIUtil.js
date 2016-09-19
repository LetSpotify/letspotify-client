import fetch from 'isomorphic-fetch';
import $ from "jquery";
const roomUrl = 'http://kevchentw.nctu.me:8888/rooms';
const authUrl = 'http://kevchentw.nctu.me:8888/auth';
const userUrl = 'http://kevchentw.nctu.me:8888/user';
const spotifyUrl = 'https://api.spotify.com/v1/tracks/';

const WebAPIUtil = {
  createRoom: (name) => fetch(`${roomUrl}/create/?name=` + name, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  subscribeRoom: (rid) => fetch(`${roomUrl}/subscribe/?rid=` + rid, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  sendInfo: (info) => fetch(`${roomUrl}/player/update/?` + $.param(info), {
      method: 'GET',
      credentials: 'include'
    })
    .then((res) => {
      return res;
    }),
  getRoomInfo: (roomID) => fetch(`${roomUrl}/get/?rid=` + roomID, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  getStatus: (roomID) => fetch(`${roomUrl}/player/get/?rid=` + roomID, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  getInfo: (track) => fetch(`${spotifyUrl}/` + track, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  getAuthToken: () => fetch(`${authUrl}/token/create`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  checkAuthToken: (token) => fetch(`${authUrl}/token/get?token=` + token, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  getCookie: (token) => fetch(`${authUrl}/token/cookie?token=` + token, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  getUserInfo: () => fetch(`${userUrl}/get`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
  getUserRoomList: () => fetch(`${userUrl}/rooms/get`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json()),
}

export default WebAPIUtil;
