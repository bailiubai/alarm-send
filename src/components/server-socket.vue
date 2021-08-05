<template>
    <div class="serverSocket">
        <button class="btn btn-start" @click="start">开启服务</button>
        <button class="btn btn-stop" @click="stop">关闭服务</button>
        <div  class="console">
            <ul>
                <li v-for="item in data">
                    {{item}}
                </li>
            </ul>
        </div>
        <button class="btn-clear" @click="clear">清空控制台</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "serverSocket",
  data() {
    return {
      data:[],
      times:60000,
      path:"ws://localhost:8888/test/one",
      socket:"",
      port:10086
    };
  },
  methods: {
    start(){
        var that = this
        axios.get('http://localhost:8888/socket/server/start/'+that.port).then(function(data){
            that.data.push(new Date()+data.data.message);
        });
    },
    stop(){
        var that = this
        axios.get('http://localhost:8888/socket/server/stop').then(function(data){
            that.data.push(new Date()+data.data.message);
        });
    },
    getStatus(){
        var that = this
        axios.get('http://localhost:8888/socket/server/status').then(function(data){
            that.data.push(new Date()+data.data.message);
        });
    },
    clear(){
        this.data.splice(0,this.data.length);
    },
    init:function(){
        if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                // 实例化socket
                this.socket = new WebSocket(this.path)
                // 监听socket连接
                this.socket.onopen = this.open
                // 监听socket错误信息
                this.socket.onerror = this.error
                // 监听socket消息
                this.socket.onmessage = this.getMessage
            }
    },
    open: function () {
            console.log("socket连接成功")
        },
    error: function () {
        console.log("连接错误")
    },
    getMessage: function (msg) {
        this.data.push(msg.data);
    },
    send: function () {
        this.socket.send(params)
    },
    close: function () {
        console.log("socket已经关闭")
    }
  },
  mounted(){
      this.timer = setInterval(this.getStatus, this.times);
      this.init();
  },
  beforeDestroy(){
      clearInterval(this.timer);
  },
  destroyed(){
    // 销毁监听
    this.socket.onclose = this.close
  }
};
</script>

<style scoped>
.serverSocket{
    width: 600px;
    position: fixed;
    top: 50px;
    left: 25%;
    margin: auto;
    text-align: center;
}
.btn{
    border: 0px;
    padding: 0px;
    width: 300px;
    height: 40px;
    background-color:rgb(90, 193, 201);
    color: black;
    cursor: pointer;
}
.btn:hover{
    background-color:rgb(5, 223, 223);
    font-weight: bold;
    color: white;
}
.btn-stop{
    border-left: 1px solid rebeccapurple;
    border-bottom: 1px solid rebeccapurple;
    margin-left: -5px;
}
.btn-start{
    border-right: 1px solid rebeccapurple;
    border-bottom: 1px solid rebeccapurple;
}
.console{
    width: 100%;
    height: 400px;
    background-color:black;
    border-top: 1px solid rebeccapurple;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow-y:auto;
}
li{
    list-style-type:none;
    margin-bottom: 10px;
    font-size: 4px;
    color: red;
}
.btn-clear{
    width: 100%;
    height: 40px;
    background-color:rgb(90, 193, 201);
    border: 0px;
    cursor: pointer;
    border-radius: 5px;
}
.btn-clear:hover{
    background-color:rgb(5, 223, 223);
    font-weight: bold;
    color: white;
}

</style>
