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
        "backgroundColor": "#181818",
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
    "windowControl": {
        "position": "fixed",
        "display": "flex",
        "height": 40,
        "width": 100 * vw,
        "backgroundColor": "#EDEEF4"
    },
    "windowTitle": {
        "minWidth": 100 * vw,
        "maxWidth": 100 * vw,
        "marginLeft": -25,
        "color": "#131313"
    },
    "controlWrapper": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-around",
        "alignItems": "center",
        "width": 60,
        "paddingLeft": 5,
        "paddingRight": 5,
        "height": 40
    },
    "controlButton": {
        "width": 20,
        "height": 20
    },
    "controlButton:hover": {
        "cursor": "pointer"
    },
    "controlButton svg": {
        "opacity": 0.3,
        "transform": "scale(.7)",
        "transition": "all .2s"
    },
    "controlButton:hover svg": {
        "opacity": 8,
        "transform": "scale(1)",
        "transition": "all .2s"
    },
    "userInfo": {
        "width": 200,
        "height": 40,
        "lineHeight": 40,
        "marginLeft": "calc(100vw - 200px)",
        "display": "flex",
        "justifyContent": "flex-end"
    },
    "userInfo span": {
        "marginRight": 10,
        "fontSize": 1.2,
        "lineHeight": 40
    },
    "userInfo img": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": "50%",
        "boxShadow": "1px 1px 2px .5px #4F4F4F"
    },
    "userInfo:hover": {
        "cursor": "pointer"
    },
    "status": {
        "position": "absolute",
        "display": "flex",
        "alignItems": "center",
        "height": 40,
        "width": 50 * vw,
        "marginLeft": 60
    },
    "statuscopy": {
        "width": 150,
        "height": 30,
        "border": "1.6px solid rgb(28, 39, 59)",
        "marginTop": 5,
        "borderRadius": 5,
        "outline": "none",
        "backgroundColor": "transparent",
        "display": "flex",
        "justifyContent": "center"
    },
    "statuscopy:hover": {
        "cursor": "pointer"
    },
    "statuscopy:active": {
        "transform": "translate(1px, 1px)"
    }
});