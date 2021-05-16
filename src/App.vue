<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Ant Design Vue 3 in CodeSandbox!" />
  <a-button type="primary" @click="open"> go antdv.com </a-button>
</template>
<script>
import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  setup() {
    return {
      open: () => {
        window.open("https://antdv.com", "_blank");
      },
    };
  },
  components: {
    HelloWorld: HelloWorldVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
