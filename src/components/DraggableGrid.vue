<template>
  <v-main class="container">
    <div class="text-center" v-if="homesLoading">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="70"
        :width="10"
      ></v-progress-circular>
    </div>
    <draggable v-else class="row" v-model="photos" :sort="true">
      <v-col sm="4" md="3" lg="2" v-for="(image, i) in photos" :key="i">
        <v-img
          class="image"
          :src="image.thumbnailUrl"
          @click="showImageModal(image)"
        />
      </v-col>
    </draggable>

    <v-dialog v-model="dialog" max-width="800">
      <image-modal :currentPhotoDialog="currentPhotoDialog"></image-modal>
    </v-dialog>
  </v-main>
</template>

<script>
import api from "../services/api";
import draggable from "vuedraggable";
import ImageModal from "./ImageModal";

export default {
  name: "DraggableGrid",

  components: {
    draggable,
    ImageModal
  },

  data() {
    return {
      photos: [],
      dialog: false,
      currentPhotoDialog: { title: "", url: "" },
      homesLoading: false
    };
  },

  created() {
    this.homesLoading = true;
    api
      .getPhotos()
      .then(response => (this.photos = this.orderPhotosResponse(response)))
      .finally(() => (this.homesLoading = false));
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
    },

    showImageModal(photo) {
      this.currentPhotoDialog = photo;
      this.dialog = true;
    }
  }
};
</script>

<style scoped lang="scss">
.image {
  cursor: move;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
