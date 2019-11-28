<template><div id="stories"></div> </template>

<script>
//import Zuck from "zuck.js";

export default {
  // name: "Story",
  // data() {
  //   return {
  //     storiesElement: null,
  //     storiesApi: null
  //   };
  // },
  // mounted() {
  //   this.storiesApi = new Zuck("stories", {
  //     skin: "snapgram", // container class
  //     avatars: true, // shows user photo instead of last story item preview
  //     list: false, // displays a timeline instead of carousel
  //     openEffect: true, // enables effect when opening story - may decrease performance
  //     cubeEffect: false, // enables the 3d cube effect when sliding story - may decrease performance
  //     autoFullScreen: false, // enables fullscreen on mobile browsers
  //     backButton: true, // adds a back button to close the story viewer
  //     backNative: false, // uses window history to enable back button on browsers/android
  //     previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
  //     localStorage: true, // set true to save "seen" position. Element must have a id to save properly.
  //     reactive: true, // set true if you use frameworks like React to control the timeline (see react.sample.html)
  //     stories: [
  //       Zuck.buildTimelineItem(
  //         "ramon", // story id
  //         "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg", // story dış img
  //         "Ramon", // story dış Altyzısı
  //         "https://ramon.codes", // story içindeki son itemdeki link url
  //         timestamp(),
  //         [
  //           [
  //             "ramon-1", // sub story  id
  //             "photo", // sub story tipi
  //             3, // sub story saniye cinsinden uzunluğu
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", // sub story fotoğraf/video url
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", // sub story fotoğraf/video önizleme url
  //             "", // sub story linki url
  //             false, // sub story link yazısı
  //             false, // sub story boyunca sürenin gösterilip gösterilmemesi ile alakalı
  //             timestamp() // bu fonksiyonşimdiki zamanın 1574683755343 gibi bir değerini hesaplıyor ve ona göre story paylaşım zamanını belirtiyor
  //           ],
  //           [
  //             "ramon-2",
  //             "video",
  //             0,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
  //             "",
  //             false,
  //             false,
  //             timestamp()
  //           ],
  //           [
  //             "ramon-3",
  //             "photo",
  //             3,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
  //             "https://www.google.com.tr/",
  //             "Visit gogle",
  //             false,
  //             timestamp()
  //           ]
  //         ]
  //       ),
  //       Zuck.buildTimelineItem(
  //         "gorillaz",
  //         "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg",
  //         "Gorillaz",
  //         "",
  //         timestamp(),
  //         [
  //           [
  //             "gorillaz-1",
  //             "video",
  //             0,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
  //             "",
  //             false,
  //             false,
  //             timestamp()
  //           ],
  //           [
  //             "gorillaz-2",
  //             "photo",
  //             3,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
  //             "",
  //             false,
  //             false,
  //             timestamp()
  //           ]
  //         ]
  //       ),
  //       Zuck.buildTimelineItem(
  //         "ladygaga",
  //         "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg",
  //         "Lady Gaga",
  //         "",
  //         timestamp(),
  //         [
  //           [
  //             "ladygaga-1",
  //             "photo",
  //             5,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
  //             "",
  //             false,
  //             false,
  //             timestamp()
  //           ],
  //           [
  //             "ladygaga-2",
  //             "photo",
  //             3,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
  //             "http://ladygaga.com",
  //             false,
  //             false,
  //             timestamp()
  //           ]
  //         ]
  //       ),
  //       Zuck.buildTimelineItem(
  //         "starboy",
  //         "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg",
  //         "The Weeknd",
  //         "",
  //         timestamp(),
  //         [
  //           [
  //             "starboy-1",
  //             "photo",
  //             5,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
  //             "",
  //             false,
  //             false,
  //             timestamp()
  //           ]
  //         ]
  //       ),
  //       Zuck.buildTimelineItem(
  //         "riversquomo",
  //         "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg",
  //         "Rivers Cuomo",
  //         "",
  //         timestamp(),
  //         [
  //           [
  //             "riverscuomo",
  //             "photo",
  //             10,
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
  //             "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
  //             "",
  //             false,
  //             false,
  //             timestamp()
  //           ]
  //         ]
  //       )
  //     ],
  //     callbacks: {
  //       onDataUpdate: function(currentState, callback) {
  //         this.setState(
  //           state => {
  //             state.stories = currentState;
  //             return state;
  //           },
  //           () => {
  //             callback();
  //           }
  //         );
  //       }.bind(this)
  //     }
  //   });
  // },
  // render: function() {
  //   const timelineItems = [];
  //   this.state.stories.forEach((story, storyId) => {
  //     const storyItems = [];
  //     story.items.forEach(storyItem => {
  //       storyItems.push(
  //         <li
  //           key={storyItem.id}
  //           data-id={storyItem.id}
  //           data-time={storyItem.time}
  //           className={storyItem.seen ? "seen" : ""}
  //         >
  //           <a
  //             href={storyItem.src}
  //             data-type={storyItem.type}
  //             data-length={storyItem.length}
  //             data-link={storyItem.link}
  //             data-linkText={storyItem.linkText}
  //           >
  //             <img src={storyItem.preview} />
  //           </a>
  //         </li>
  //       );
  //     });
  //     let arrayFunc = story.seen ? "push" : "unshift";
  //     timelineItems[arrayFunc](
  //       <div
  //         className={story.seen ? "story seen" : "story"}
  //         key={storyId}
  //         data-id={storyId}
  //         data-last-updated={story.lastUpdated}
  //         data-photo={story.photo}
  //       >
  //         <a className="item-link" href={story.link}>
  //           <span className="item-preview">
  //             <img src={story.photo} />
  //           </span>
  //           <span
  //             className="info"
  //             itemProp="author"
  //             itemScope=""
  //             itemType="http://schema.org/Person"
  //           >
  //             <strong className="name" itemProp="name">
  //               {story.name}
  //             </strong>
  //             <span className="time">{story.lastUpdated}</span>
  //           </span>
  //         </a>
  //         <ul className="items">{storyItems}</ul>
  //       </div>
  //     );
  //   });
  //   return (
  //     <div>
  //       <div id="stories-react" class="storiesWrapper">
  //         {timelineItems}
  //       </div>
  //     </div>
  //   );
  // }
};
</script>

<style></style>
