<template>
  <v-card>
    <v-col cols="12">
      <v-img class="image" :src="currentPhotoDialog.url" />
    </v-col>
    <v-card-text>
      <p class="text-left">{{ currentPhotoDialog.title }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ImageModal",
  props: {
    currentPhotoDialog: Object
  },

  methods: {}
};
</script>

<style scoped lang="scss">
.text-left {
  text-align: left;
}
</style>
