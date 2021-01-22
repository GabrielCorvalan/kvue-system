<template>
  <v-main class="container">
    <draggable class="row" v-model="photos" :sort="true">
      <v-col sm="4" md="3" lg="2" v-for="(image, i) in photos" :key="i">
        <v-img class="image" :src="image.thumbnailUrl" />
      </v-col>
    </draggable>
  </v-main>
</template>

<script>
import api from "../services/api";
import draggable from "vuedraggable";

export default {
  name: "DraggableGrid",
  props: {
    msg: String
  },

  components: {
    draggable
  },

  data() {
    return {
      photos: []
    };
  },

  created() {
    api.getPhotos().then(response => {
      this.photos = this.orderPhotosResponse(response);
    });
  },

  methods: {
    hasSameNumberOfVowels(firstWord, secondWord) {
      return (
        firstWord.match(/[aeiou]/gi).length ===
        secondWord.match(/[aeiou]/gi).length
      );
    },

    orderPhotosResponse(photos) {
      return photos.sort((photo, secondPhoto) =>
        this.hasSameNumberOfVowels(photo.title, secondPhoto.title)
          ? secondPhoto.id - photo.id
          : photo.title.match(/[aeiou]/gi).length -
            secondPhoto.title.match(/[aeiou]/gi).length
      );
    }
  }
};
</script>

<style scoped lang="scss">
.image {
  cursor: move;
}
</style>
