<template>
  <div></div>
</template>

<script>
import Zuck from "zuck.js";
export default {
  name: "app",
  data: function() {
    return {
      storiesElement: null,
      storiesApi: null
    };
  },
  state: {
    stories: [
      Zuck.buildTimelineItem(
        "ramon",
        "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
        "Ramon",
        "https://ramon.codes",
        1575221470504,
        [
          [
            "ramon-1",
            "photo",
            100,
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
            "",
            false,
            false,
            1575221470504
          ],
          [
            "ramon-2",
            "video",
            0,
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
            "",
            false,
            false,
            1575221470504
          ],
          [
            "ramon-3",
            "photo",
            3,
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
            "https://ramon.codes",
            "Visit my Portfolio",
            false,
            false,
            1575221470504
          ]
        ]
      )
    ]
  },
  mounted() {
    new Zuck(this.storiesElement, {
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
      stories: this.state.stories,
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
  },
  render: function() {
    const timelineItems = [];

    this.state.stories.forEach((story, storyId) => {
      const storyItems = [];

      story.items.forEach(storyItem => {
        storyItems.push(
          <li
            key={storyItem.id}
            data-id={storyItem.id}
            data-time={storyItem.time}
            class={storyItem.seen ? "seen" : ""}
          >
            <a
              href={storyItem.src}
              data-type={storyItem.type}
              data-length={storyItem.length}
              data-link={storyItem.link}
              data-linkText={storyItem.linkText}
            >
              <img src={storyItem.preview} />
            </a>
          </li>
        );
      });

      let arrayFunc = story.seen ? "push" : "unshift";
      timelineItems[arrayFunc](
        <div
          className={story.seen ? "story seen" : "story"}
          key={storyId}
          data-id={storyId}
          data-last-updated={story.lastUpdated}
          data-photo={story.photo}
        >
          <a className="item-link" href={story.link}>
            <span className="item-preview">
              <img src={story.photo} />
            </span>
            <span
              className="info"
              itemProp="author"
              itemScope=""
              itemType="http://schema.org/Person"
            >
              <strong className="name" itemProp="name">
                {story.name}
              </strong>
              <span className="time">{story.lastUpdated}</span>
            </span>
          </a>

          <ul className="items">{storyItems}</ul>
        </div>
      );
    });

    return (
      <div>
        <div
          ref={node => (this.storiesElement = node)}
          id="stories-react"
          className="storiesWrapper"
        >
          {timelineItems}
        </div>
      </div>
    );
  }
};
</script>

<style>
/* @import "~zuck.js/dist/skins/snapgram.min.css";
@import "~zuck.js/dist/zuck.min.css"; */
</style>
