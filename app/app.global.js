import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "position": "relative",
        "color": "#3B3E3C",
        "height": 100 * vh,
        "backgroundColor": "#E6E6E6",
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
        "backgroundColor": "#2C2E31",
        "color": "#FEFEFE",
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
        "marginLeft": -20,
        "height": 35,
        "lineHeight": 40,
        "display": "flex",
        "justifyContent": "flex-end",
        "alignItems": "center"
    },
    "userInfo span": {
        "fontSize": 1,
        "lineHeight": 40
    },
    "userInfo img": {
        "width": 26,
        "height": 26,
        "borderRadius": "50%",
        "marginLeft": 15,
        "boxShadow": "0px 0px 4px 0px #121212"
    },
    "toggleMenu": {
        "marginLeft": 10,
        "opacity": 0.5
    },
    "toggleMenu:hover": {
        "opacity": 1
    },
    "userMenu": {
        "position": "absolute",
        "backgroundColor": "#26282A",
        "marginLeft": -150,
        "marginTop": 40,
        "borderRadius": 3,
        "width": 160,
        "zIndex": 0
    },
    "userMenu::before": {
        "position": "absolute",
        "width": 20,
        "height": 20,
        "marginLeft": 132,
        "marginTop": -5,
        "content": "''",
        "backgroundColor": "#26282A",
        "transform": "rotate(45deg)",
        "zIndex": -1
    },
    "userMenuItem": {
        "width": 130,
        "paddingLeft": 30,
        "height": 40,
        "cursor": "pointer",
        "opacity": 0.6,
        "borderRadius": 3,
        "WebkitUserSelect": "none"
    },
    "userMenuItem:hover": {
        "opacity": 1,
        "zIndex": 1
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