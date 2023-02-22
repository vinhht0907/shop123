<template>
  <div>
    <Shop :product="getMen" :image="heroWomen" :category="category" />
  </div>
</template>

<script>
import Shop from "@/components/Shop.vue";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Men",
  components: {Shop},
  data() {
    return {
      heroWomen: "heroMen.jpg",
      category: "Men",
    };
  },
  computed: {
    ...mapGetters(["getMen"]),
  },
}
</script>

<style scoped>

</style>