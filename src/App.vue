<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/search">搜索</router-link> ｜-->
  <!--    <router-link to="/explore">发现</router-link> ｜-->
  <!--    <router-link to="/login">我的</router-link>-->
  <!--  </div>-->
  <a-menu
    theme="light"
    mode="horizontal"
    v-model:selectedKeys="selectedKeys"
    :style="{ lineHeight: '64px' }"
  >
    <a-menu-item key="1"
      ><router-link to="/search">搜索</router-link></a-menu-item
    >
    <a-menu-item key="2"
      ><router-link to="/explore">发现</router-link></a-menu-item
    >
    <a-menu-item key="3"
      ><router-link to="/login">我的</router-link></a-menu-item
    >
  </a-menu>

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
