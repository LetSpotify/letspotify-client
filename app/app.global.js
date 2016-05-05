import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "position": "relative",
        "color": "white",
        "height": 100 * vh,
        "backgroundColor": "rgb(34, 39, 44)",
        "overflow": "hidden",
        "fontFamily": "pingfang sc\", \"Microsoft JhengHei",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "::-webkit-scrollbar": {
        "width": 8
    },
    "::-webkit-scrollbar-thumb": {
        "backgroundColor": "rgba(125, 125, 125, .4)",
        "borderRadius": 10
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 2.25,
        "fontWeight": "bold",
        "letterSpacing": -0.025,
        "color": "#fff"
    },
    "li": {
        "listStyle": "none"
    },
    "windowNav": {
        "position": "relative",
        "height": 35,
        "backgroundColor": "#FFFBFA",
        "color": "#2F302F",
        "display": "flex"
    },
    "windowControl": {
        "width": 75,
        "height": 35
    },
    "windowStatus": {
        "width": "calc(100vw - 75px)",
        "height": 35,
        "display": "flex",
        "justifyContent": "flex-end"
    },
    "windowUserSection": {
        "height": 35,
        "width": 200
    },
    "windowTitle": {
        "height": 35,
        "width": "calc(100% - 400px + 75px)",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "userInfo": {
        "width": 200,
        "height": 35,
        "lineHeight": 40,
        "display": "flex",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "cursor": "pointer"
    },
    "userInfo span": {
        "fontSize": 1.2,
        "lineHeight": 40
    },
    "userInfo img": {
        "width": 30,
        "height": 30,
        "borderRadius": "50%",
        "marginLeft": 25,
        "boxShadow": "0px 0px 4px 0px #121212"
    },
    "status": {
        "height": 35,
        "lineHeight": 35
    },
    "statuscopy": {
        "height": 30,
        "lineHeight": 25,
        "border": "1.6px solid rgb(28, 39, 59)",
        "borderRadius": 5,
        "outline": "none",
        "backgroundColor": "transparent",
        "display": "flex",
        "justifyContent": "center",
        "cursor": "pointer"
    },
    "statuscopy:active": {
        "transform": "translate(1px, 1px)"
    }
});