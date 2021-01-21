<template>
  <v-content class="container">
    <draggable class="row" v-model="photos" :sort="true">
      <v-col cols="4" :key="image" v-for="image in photos">
        <v-card>
          <v-card-text>
            <v-img :src="image" />
          </v-card-text>
        </v-card>
      </v-col>
    </draggable>
  </v-content>
</template>

<script>
import api from "../services/api";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data() {
    return {
      photos: []
    };
  },

  created() {
    api.getPhotos().then(response => {
      console.log(response);
      this.photos = response;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
