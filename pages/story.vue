<template>
  <div id="stories"></div>
</template>

<script>
import "~/assets/js/zuck.min.js";
export default {
  name: "story",
  props: {
    storyData: {
      type: Array,
      required: false
    }
  },

  mounted() {
    this.showData();
  },

  methods: {
    showData() {
      new Zuck("stories", {
        skin: "snapgram", // container class
        avatars: true, // shows user photo instead of last story item preview
        paginationArrows: false,
        list: false, // displays a timeline instead of carousel
        cubeEffect: true, // enables the 3d cube effect when sliding story - may decrease performance
        autoFullScreen: true, // enables fullscreen on mobile browsers
        backButton: false,
        backNative: true, // uses window history to enable back button on browsers/android
        previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
        localStorage: true,
        reactive: false,
        stories: this.storyData
      });
    }
  }
};
</script>

<style>
@import "~/assets/css/snapgram.min.css";
@import "~/assets/css/zuck.min.css";
@import "~/assets/css/story.css";
</style>
