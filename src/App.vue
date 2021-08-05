<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import socketmenu from "./components/socket_menu.vue";
import unDevelopment from "./components/un-development.vue";
import info from "./components/info.vue";
import infoSuccess from "./components/info-success.vue";
import serverSocket from "./components/server-socket.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    socketmenu,
    unDevelopment,
    info,
    infoSuccess,
    serverSocket,
  },
};
</script>

<style>
  body{
    height: 1000px;
          background: url('./images/bg1.png');
      }
</style>
