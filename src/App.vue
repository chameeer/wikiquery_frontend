<template>
  <div id="nav">
    <router-link to="/search">搜索</router-link> ｜
    <router-link to="/explore">发现</router-link> ｜
    <router-link to="/login">个人中心</router-link>
  </div>
  <router-view />
  <!--  <img src="../src/assets/Picture1.png" alt="hello" />-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  components: {}
};
</script>
