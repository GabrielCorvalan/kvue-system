<template>
  <div class="home">
    <DraggableGrid msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import DraggableGrid from "@/components/DraggableGrid.vue";

export default {
  name: "Home",
  components: {
    DraggableGrid
  }
};
</script>
