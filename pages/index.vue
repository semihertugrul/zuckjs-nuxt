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
export default {
  name: "app",
  data: function() {
    return {
      storiesElement: null,
      storiesApi: null,
      // storyData: [],
      storyData: [
        {
          id: "ramon",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          name: "Soçi 2019",
          link: "",
          lastUpdated: 1575637794.095,
          category: "DÜNYA & POLİTİKA",
          seen: false,
          items: [
            {
              id: "ramon-1",
              type: "photo",
              length: 200,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1575042980.713
            }
            // {
            //   id: "ramon-2",
            //   type: "video",
            //   length: 3,
            //   src:
            //     "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
            //   preview:
            //     "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
            //   link: "",
            //   linkText: false,
            //   seen: false,
            //   time: 1574956580.713
            // },
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
            //   time: 1574956580.713
            // }
          ]
        },
        {
          id: "semih",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          name: "semih sffd",
          link: "",
          lastUpdated: 1575637794.095,
          category: "Ekonomi",
          seen: false,
          items: [
            {
              id: "ramon-1",
              type: "photo",
              length: 200,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1575042980.713
            },
            {
              id: "ramon-2",
              type: "video",
              length: 3,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1574956580.713
            },
            {
              id: "ramon-3",
              type: "photo",
              length: 3,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
              link: "",
              linkText: false,
              seen: false,
              time: 1574956580.713
            }
          ]
        }
      ],
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
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
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
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              filePath:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              createdDate: "2019-11-20T18:56:20.713"
            }
            // {
            //   type: "text",
            //   user: {
            //     id: 1,
            //     name: "bora çınar"
            //   },
            //   url:
            //     "https://www.gzt.com/dunya-politika/arnavutluktaki-depremde-olu-ve-yarali-sayisi-artiyor-3514989",
            //   content: "Deniz çok güzel sende gelsene",
            //   createdDate: "2019-11-20T18:56:20.713"
            // }
          ]
        }
        // {
        //   id: 1222,
        //   siteId: 4,
        //   mainCategory: {
        //     id: 1,
        //     name: "Gündem"
        //   },
        //   title: "Soçi 2019",
        //   publishDate: "2019-11-20T18:56:20.713",
        //   expirationDate: "2019-12-20T18:56:20.713",
        //   createdDate: "2019-11-20T18:56:20.713",
        //   updateDate: "2019-11-20T18:56:20.713",
        //   user: {
        //     id: 1,
        //     name: "adem çınar"
        //   },
        //   status: 1,
        //   coverPhotoPath:
        //     "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
        //   stories: [
        //     {
        //       type: "photo",
        //       user: {
        //         id: 1,
        //         name: "yusuf çınar"
        //       },
        //       url:
        //         "https://www.gzt.com/dunya-politika/arnavutluktaki-depremde-olu-ve-yarali-sayisi-artiyor-3514989",
        //       filePath:
        //         "/resim/imagecrop/2019/11/26/04/57/resized_1e6a0-A865828_04.jpg",
        //       createdDate: "2019-11-20T18:56:20.713",
        //       isCoverPhoto: true
        //     },
        //     {
        //       type: "video",
        //       duration: "05:10",
        //       user: {
        //         id: 1,
        //         name: "taha çınar"
        //       },
        //       url:
        //         "https://www.gzt.com/dunya-politika/arnavutluktaki-depremde-olu-ve-yarali-sayisi-artiyor-3514989",
        //       filePath:
        //         "/resim/upload/video/2019/06/30/af68ef013fac4a1c9e031eee7ba03d52.mp4",
        //       createdDate: "2019-11-20T18:56:20.713"
        //     }
        //     // {
        //     //   type: "text",
        //     //   user: {
        //     //     id: 1,
        //     //     name: "bora çınar"
        //     //   },
        //     //   url:
        //     //     "https://www.gzt.com/dunya-politika/arnavutluktaki-depremde-olu-ve-yarali-sayisi-artiyor-3514989",
        //     //   content: "Deniz çok güzel sende gelsene",
        //     //   createdDate: "2019-11-20T18:56:20.713"
        //     // }
        //   ]
        // }
      ]
    };
  },

  methods: {
    localStorageControl: function(id) {
      return window.localStorage[`zuck-${id}-seenItems`]
        ? JSON.parse(window.localStorage[keyName])
        : false;
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
        seen: true,
        items: data.stories.map((item, i) =>
          this.transformItemData(data.id, item, i + 1)
        )
      };
    },
    showData: function() {
      this.storyData = this.apiData
        .filter(
          x =>
            x.status === 1 &&
            x.siteId === 4 &&
            this.expirationDateControl(x.expirationDate)
        )
        .map(data => this.transformMainData(data));
    }
  },
  beforeMount() {
    // this.showData();
  }
};
</script>

<style></style>
