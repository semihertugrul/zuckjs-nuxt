import Vue from "vue";

// import Zuck from "zuck.js";
import "~/plugins/Zuck.js";

import "zuck.js/dist/skins/snapgram.min.css";
import "zuck.js/dist/zuck.min.css";

Vue.use(
  Zuck,
  new Zuck("stories", {
    skin: "snapgram", // container class
    avatars: true, // shows user photo instead of last story item preview
    paginationArrows: false,
    list: false, // displays a timeline instead of carousel

    cubeEffect: true, // enables the 3d cube effect when sliding story - may decrease performance
    autoFullScreen: false, // enables fullscreen on mobile browsers

    backNative: true, // uses window history to enable back button on browsers/android
    previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
    localStorage: true,

    stories: []
  })
);
