<template>
  <div class="hello">
    <router-link to="/socket"><button class="btn">Socket</button></router-link>
    <router-link to="/unDevelopment"><button class="btn">Snmp</button></router-link>
    <router-link to="/unDevelopment"><button class="btn">MQ</button></router-link>
    <router-link to="/unDevelopment"><button class="btn">RestFul</button></router-link>
    <router-link to="/unDevelopment"><button class="btn">数据集</button></router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: fixed;
  border-radius: 5px;
  left: 25%;
  top: 50px;
  margin: auto;
  width: 600px;
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
  font-weight:bold;
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
