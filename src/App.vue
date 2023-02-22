<template>
  <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <Navbar/>
  <router-view />
</template>

<script>

import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
  }
}
</script>

<style>

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
}
.opacity {
  opacity: 0.8;
}

html,
body,
p,
h1,
h3 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

textarea:focus,
input:focus {
  outline: none;
}

button:focus {
  outline: 0;
}

button {
  cursor: pointer;
}

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
