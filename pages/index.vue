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
      :data-category="story.category"
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
import "~/plugins/Zuck.js";
export default {
  name: "app",
  data: function() {
    return {
      storiesElement: null,
      storiesApi: null,
      storyData: [],

      apiData: [
        {
          id: 1222,
          siteId: 4,
          mainCategory: {
            id: 1,
            name: "Gündem"
          },
          title: "Bu Sabah",
          publishDate: "2019-11-20T18:56:20.713",
          expirationDate: "2019-12-20T18:56:20.713",
          createdDate: "2019-11-20T18:56:20.713",
          updateDate: "2019-11-20T18:56:20.713",
          user: {
            id: 1,
            name: "adem çınar"
          },
          status: 1,
          coverPhotoPath:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          stories: [
            {
              type: "photo",
              user: {
                id: 1,
                name: "yusuf çınar"
              },
              url:
                "https://resizer.piri.net/resize.aspx?w=593&h=0&url=/resim/imagecrop/2019/12/09/11/14/resized_8b996-c9a2bc73648ca169175d4743a2c02bb35a76b57c.jpg",
              filePath:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              createdDate: "2019-11-20T18:56:20.713",
              isCoverPhoto: true
            },
            {
              type: "video",
              duration: "05:10",
              user: {
                id: 1,
                name: "taha çınar"
              },
              url:
                "https://beta.gzt.com/dunya-politika/turkiye-sinif-atladi-insani-gelismede-en-yuksek-kategoriye-yukseldi-3515759",
              filePath:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              createdDate: "2019-11-20T18:56:20.713"
            }
          ]
        },
        {
          id: 1223,
          siteId: 4,
          mainCategory: {
            id: 1,
            name: "Ekonomi"
          },
          title: "Soçi 2019",
          publishDate: "2019-11-20T18:56:20.713",
          expirationDate: "2019-12-20T18:56:20.713",
          createdDate: "2019-11-20T18:56:20.713",
          updateDate: "2019-11-20T18:56:20.713",
          user: {
            id: 1,
            name: "adem çınar"
          },
          status: 1,
          coverPhotoPath:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          stories: [
            {
              type: "photo",
              user: {
                id: 1,
                name: "yusuf çınar"
              },
              url:
                "https://www.gzt.com/dunya-politika/arnavutluktaki-depremde-olu-ve-yarali-sayisi-artiyor-3514989",
              filePath:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              createdDate: "2019-11-20T18:56:20.713",
              isCoverPhoto: true
            },
            {
              type: "video",
              duration: "05:10",
              user: {
                id: 1,
                name: "taha çınar"
              },
              url:
                "https://www.gzt.com/dunya-politika/arnavutluktaki-depremde-olu-ve-yarali-sayisi-artiyor-3514989",
              filePath:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
              createdDate: "2019-11-20T18:56:20.713"
            }
          ]
        }
      ]
    };
  },

  beforeMount() {
    this.showData();
  },

  mounted() {
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
    });
  },

  methods: {
    localStorageControl: function(id) {
      const keyName = `zuck-stories-seenItems`;
      if (window.localStorage[keyName]) {
        return !!JSON.parse(window.localStorage[keyName])[id];
      } else {
        return false;
      }
    },

    dateConvert: function(dateStr) {
      return new Date(dateStr).valueOf() / 1000;
    },

    expirationDateControl: function(expirationDate) {
      return expirationDate ? new Date(expirationDate) > new Date() : true;
    },

    transformItemData: function(id, item, index) {
      return {
        id: String(id) + "-" + String(index),
        type: item.type,
        length: 6,
        src: item.filePath,
        preview: item.filePath,
        link: item.url,
        linkText: item.url ? "Detayı Gör" : false,
        seen: false,
        time: this.dateConvert(item.createdDate)
      };
    },

    transformMainData: function(data) {
      return {
        id: String(data.id),
        photo: data.coverPhotoPath,
        name: data.title,
        link: "",
        lastUpdated: this.dateConvert(data.createdDate),
        category: data.mainCategory.name,
        seen: this.localStorageControl(data.id),
        items: data.stories.map((item, i) =>
          this.transformItemData(data.id, item, i + 1)
        )
      };
    },

    showData: function() {
      let tmpData = this.apiData
        .filter(
          x =>
            x.status === 1 &&
            x.siteId === 4 &&
            this.expirationDateControl(x.expirationDate)
        )
        .map(data => this.transformMainData(data));

      this.storyData.push(...tmpData.filter(story => story.seen === false));
      this.storyData.push(...tmpData.filter(story => story.seen === true));
    }
  }
};
</script>

<style>
@import "~/assets/css/snapgram.min.css";
@import "~/assets/css/zuck.min.css";
@import "~/assets/css/story.css";
</style>
