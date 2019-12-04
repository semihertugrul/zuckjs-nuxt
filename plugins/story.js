import Zuck from "zuck.js";
new Zuck("stories", {
  skin: "snapgram", // container class
  avatars: true, // shows user photo instead of last story item preview
  paginationArrows: false,
  list: false, // displays a timeline instead of carousel
  // openEffect: true, // enables effect when opening story - may decrease performance
  cubeEffect: true, // enables the 3d cube effect when sliding story - may decrease performance
  autoFullScreen: false, // enables fullscreen on mobile browsers
  // backButton: true, // adds a back button to close the story viewer
  backNative: true, // uses window history to enable back button on browsers/android
  previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
  localStorage: true, // set true to save "seen" position. Element must have a id to save properly.
  stories: [
    {
      id: "0",
      photo:
        "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
      name: "Ramon",
      link: "https://ramon.codes",
      lastUpdated: 1575221470504,
      items: [
        {
          id: "ramon-1",
          type: "photo",
          length: 3,
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
