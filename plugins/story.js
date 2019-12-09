import Vue from "vue";

// import Zuck from "zuck.js";

import "~/plugins/Zuck.js";

Vue.use(
  Zuck,
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
    stories: []
  })
);

// storyData: [
//   {
//     id: "ramon",
//     photo:
//       "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
//     name: "Soçi 2019",
//     link: "",
//     lastUpdated: 1575637794.095,
//     category: "DÜNYA & POLİTİKA",
//     seen: false,
//     items: [
//       {
//         id: "ramon-1",
//         type: "photo",
//         length: 200,
//         src:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
//         preview:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
//         link: "",
//         linkText: false,
//         seen: false,
//         time: 1575042980.713
//       }
//       {
//         id: "ramon-2",
//         type: "video",
//         length: 3,
//         src:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
//         preview:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
//         link: "",
//         linkText: false,
//         seen: false,
//         time: 1574956580.713
//       },
//       {
//         id: "ramon-3",
//         type: "photo",
//         length: 3,
//         src:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
//         preview:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
//         link: "",
//         linkText: false,
//         seen: false,
//         time: 1574956580.713
//       }
//     ]
//   },
//   {
//     id: "semih",
//     photo:
//       "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
//     name: "semih sffd",
//     link: "",
//     lastUpdated: 1575637794.095,
//     category: "Ekonomi",
//     seen: false,
//     items: [
//       {
//         id: "ramon-1",
//         type: "photo",
//         length: 200,
//         src:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
//         preview:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
//         link: "",
//         linkText: false,
//         seen: false,
//         time: 1575042980.713
//       },
//       {
//         id: "ramon-2",
//         type: "video",
//         length: 3,
//         src:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
//         preview:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
//         link: "",
//         linkText: false,
//         seen: false,
//         time: 1574956580.713
//       },
//       {
//         id: "ramon-3",
//         type: "photo",
//         length: 3,
//         src:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
//         preview:
//           "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
//         link: "",
//         linkText: false,
//         seen: false,
//         time: 1574956580.713
//       }
//     ]
//   }
// ],
