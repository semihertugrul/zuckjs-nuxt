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
          v-for="storyItem in story.items"
          :key="storyItem.id"
          :data-id="storyItem.id"
          :class="storyItem.seen ? 'seen' : ''"
        >
          <a
            :href="storyItem.src"
            :data-type="storyItem.type"
            :data-length="storyItem.length"
            :data-link="storyItem.link"
            :data-linkText="storyItem.linkText"
            :data-time="storyItem.time"
          >
            <img :src="storyItem.preview" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
          link: "",
          lastUpdated: 1575637794.095,

          items: [
            // {
            //   id: "ramon-1",
            //   type: "photo",
            //   length: 3,
            //   src:
            //     "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
            //   preview:
            //     "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
            //   link: "",
            //   linkText: false,
            //   seen: false,
            //   time: 1575637794.095
            // }
            {
              id: "ramon-2",
              type: "video",
              length: 0,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1575637794.095
            }
            // {
            //   id: "ramon-3",
            //   type: "photo",
            //   length: 3,
            //   src:
            //     "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
            //   preview:
            //     "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
            //   link: "",
            //   linkText: false,
            //   seen: false,
            //   time: 1575536019111
            // }
          ]
        }
      ]
    };
  }

  // methods: {
  //   transformData: function(data) {},
  //   dateConvert: function(dateStr = "2019-11-20T18:56:20.713") {
  //     return new Date(dateStr).valueOf();
  //   }
  // }

  // render(h) {
  //   console.warn("semih render");
  //   const timelineItems = [];

  //   this.storyData.map((story, storyId) => {
  //     const storyItems = [];

  //     story.items.map(storyItem => {
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

  //   return h({
  //     template: `<div>
  //         <div
  //           id="stories"
  //           className="storiesWrapper"
  //         >
  //           ${timelineItems}
  //         </div>
  //       </div>`
  //   });
  // }
};
</script>

<style></style>
