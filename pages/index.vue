<template>
  <div id="stories">
    <div
      v-for="story in this.storyData"
      :key="story.id"
      class="story"
      :class="story.seen ? 'seen' : ''"
      :data-id="story.id"
      :data-last-updated="story.lastUpdated"
      :data-photo="story.photo"
    >
      <a class="item-link" :href="story.link">
        <span class="item-preview">
          <img :src="story.photo" />
        </span>
        <span
          class="info"
          itemProp="author"
          itemScope=""
          itemType="http://schema.org/Person"
        >
          <strong class="name" itemProp="name">{{ story.name }}</strong>
          <span class="time">{{ story.lastUpdated }}</span>
        </span>
      </a>

      <ul class="items">
        <li
          v-for="storyItem in story"
          :key="storyItem.id"
          :data-id="storyItem.id"
          :data-time="storyItem.time"
          :class="storyItem.seen ? 'seen' : ''"
        >
          <a
            :href="storyItem.src"
            :data-type="storyItem.type"
            :data-length="storyItem.length"
            :data-link="storyItem.link"
            :data-linkText="storyItem.linkText"
          >
            <img :src="storyItem.preview" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Zuck from "zuck.js";
export default {
  name: "app",
  data: function() {
    return {
      storiesElement: null,
      storiesApi: null,
      storyData: [
        {
          id: "ramon",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          name: "Ramon",
          link: "https://ramon.codes",
          lastUpdated: 1575221470504,
          items: [
            {
              id: "ramon-1",
              type: "photo",
              length: 100,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1575221470504
            }
          ]
        }
      ]
    };
  },
  // state:{
  //   stories: this.storyData
  // },
  mounted() {
    new Zuck("stories", {
      skin: "snapgram", // container class
      avatars: true, // shows user photo instead of last story item preview
      list: false, // displays a timeline instead of carousel
      openEffect: true, // enables effect when opening story - may decrease performance
      cubeEffect: false, // enables the 3d cube effect when sliding story - may decrease performance
      autoFullScreen: false, // enables fullscreen on mobile browsers
      backButton: true, // adds a back button to close the story viewer
      backNative: false, // uses window history to enable back button on browsers/android
      previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
      localStorage: true, // set true to save "seen" position. Element must have a id to save properly.
      reactive: true, // set true if you use frameworks like React to control the timeline (see react.sample.html)
      stories: this.storyData
      // callbacks: {
      //   onDataUpdate: function(currentState, callback) {
      //     this.setState(
      //       state => {
      //         state.stories = currentState;
      //         return state;
      //       },
      //       () => {
      //         callback();
      //       }
      //     );
      //   }.bind(this)
      // }
    });
  }
};
</script>

<style></style>
