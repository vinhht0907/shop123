<template>
<div class="search-page">
  <div class="gradient-section">
    <h1 class="search-title">Search</h1>
  </div>
  <img class="hero-image" src="@/assets/img/heroSearch.jpg" />

</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search"
}
</script>

<style scoped>
.search-page {
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: black;
  height: 100%;
}

.gradient-section {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 26em;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  text-align: center;
  justify-content: center;
  align-content: center;
}
.search-title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.3em;
  font-family: light;
  font-weight: 100;
  text-indent: 0.3em;
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
}

.hero-image {
  position: relative;
  width: 100vw;
  height: 26em;
  top: 0;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: center;
  animation: fade-in 0.5s forwards;
}
</style>