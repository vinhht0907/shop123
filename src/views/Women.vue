<template>
<div>
  <Shop :product="getWomen" :image="heroWomen" :category="category" />
</div>
</template>

<script>
import Shop from "@/components/Shop.vue";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Women",
  components: {Shop},
  data() {
    return {
      heroWomen: "heroWomen.jpg",
      category: "Women",
    };
  },
  computed: {
    ...mapGetters(["getWomen"]),
  },
}
</script>

<style scoped>

</style>