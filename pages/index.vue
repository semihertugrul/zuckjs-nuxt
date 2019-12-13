<template>
  <story v-if="this.data.length > 0" :storyData="this.data" />
</template>

<script>
import axios from "axios";
import story from "./story";
export default {
  name: "app",
  components: {
    story
  },
  data() {
    return {
      data: []
    };
  },

  created() {
    this.showData();
  },

  methods: {
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
        seen: false,
        items: data.stories.map((item, i) =>
          this.transformItemData(data.id, item, i + 1)
        )
      };
    },

    async showData() {
      await new Promise((resolve, reject) => {
        resolve(
          axios.get("http://apisimulator.pho.fm/story").then(response => {
            this.data = response.data
              .filter(
                x =>
                  x.status === 1 &&
                  x.siteId === 4 &&
                  this.expirationDateControl(x.expirationDate)
              )
              .map(data => this.transformMainData(data));
          })
        );
      });
    }
  }
};
</script>

<style></style>
