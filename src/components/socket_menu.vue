<template>
  <div class="socketmenu">
    <router-link to="/info/socket-server"><button class="btn">Socket-server</button></router-link>
    <router-link to="/info/socket-omc"><button class="btn">Socket-client</button></router-link>
    <router-link to="/serverSocket"><button class="btn">开启本地socket服务器</button></router-link>
    <router-link to="/unDevelopment"><button class="btn">数据集</button></router-link>
    <router-link to="/"><button class="btn">首页</button></router-link>
  </div>
</template>

<script>
export default {
  name: "socketmenu",
  data() {
    return {
      server: "true",
      client: "false",
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.socketmenu {
  position: fixed;
  border-radius: 5px;
  left: 30%;
  top: 50px;
  width: 500px;
  background-color: antiquewhite;
  padding: 50px 5px;
}
.btn {
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px slategray solid;
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(118, 221, 221);
  border: 2px slategray solid;
  color: white;
  font-weight: bold;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
   color: white;
   font-weight:bold;
}
</style>