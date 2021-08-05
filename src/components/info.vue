<template>
    <div class="socketServer">
        <h1>{{title}}</h1>
        <div class="data-div">
            <label class="data-label">发送名称：</label>
            <input type="text" v-model="alarm.alarmName" class="dataname" placeholder="为此次发送取一个八七的名称！">
        </div>
        <div class="data-div">
            <label class="data-label">发送协议：</label>
            <select class="dataprotocl" v-model="alarm.protocl" @change="onChangeStripe">
                <option v-for="item in protocls"> {{item}} </option>
            </select>
            <label class="data-label">字符集：</label>
            <select class="datapcharset" v-model="alarm.charset">
                <option v-for="item in charsets"> {{item}} </option>
            </select>
        </div>
        <div class="data-div">
            <label class="data-label">对端IP：</label>
            <input type="text" v-model="alarm.address" placeholder="" class="dataip">
            <label class="data-label">对端端口：</label>
            <input type="text" v-model="alarm.port" placeholder="" class="dataport">
        </div>
        <div v-if="socketServerTest" class="data-div">
            <label class="data-label">告警原文：</label>
            <textarea class="datatext"></textarea>
        </div>
        <div v-if="snmpText" class="data-div">
            <label class="data-label">告警原文：</label>
            <table class="datatable">
                <tr>
                    <th style="background-color:#8e8d8d;color:#fff">MIB</th>
                    <th style="background-color:#8e8d8d;color:#fff">value</th>
                    <th @click="addMib" style="background-color:#8e8d8d;color:#fff">+</th>
                </tr>
                <tr v-for="(item, index) in mibs" :key="index">
                    <td><input class="tdInput" v-model="item.key"></td>
                    <td><input class="tdInput" v-model="item.value"></td>
                    <td @click="reduceMib" style="background-color:#8e8d8d;color:#fff">-</td>
                </tr>
            </table>
        </div>
        <router-link to="/"><button class="btn-return">首页</button></router-link>
        <button class="btn-send" @click="sendAlarm">发送告警</button>
        <router-link to="/socket"><button class="btn-return">返回</button></router-link>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "socketServer",
  data() {
    return {
        title:"socket-server 告警发送",
        socketServerTest:false,
        snmpText:false,
        protocl:"",
        protocls:[
          "socket-server",
          "socket-omc",
          "snmp v1",
          "snmp v2c",
          "snmp v3",
          "http",
          "kafka"
        ],
        charsets:[
            "utf-8",
            "gbk",
            "gb2312",
            "utf-16"
        ],
        mibs:[],
        alarm:{
            alarmName:"",
            port:10086,
            address:"",
            alarmTxt:"test_12312312",
            charset:"utf-8"
        }
    };
  },
  mounted:function(){
    this.pageInit();//需要触发的函数
  },
  methods:{
      onChangeStripe:function(){
          if(this.protocl == "socket-server"){
              this.snmpText = false;
              this.socketServerTest=true;
          }else{
              this.socketServerTest=false;
              this.snmpText = true;
          }
      },
      pageInit(){
          if(this.$route.params.protocl == "socket-server"){
              this.socketServerTest = true;
              this.snmpText = false;
          }else if(this.$route.params.protocl == "socket-omc"){
              this.socketServerTest = true;
              this.snmpText = false;
          }
      },
      addMib:function(){
        this.mibs.push({key:'1.0.0.1.0',value:'asdasd'});
        console.log(this.mibs);
      },
      reduceMib:function(index){
          this.mibs.splice(this.mibs.indexOf(index),1)
      },
      sendAlarm:function(){
        var that = this;
        axios.post("http://localhost:8888/socket/client/sendLocal",that.alarm).then((data) => {
           console.log(data);
        })
      }
  }
};
</script>

<style scoped>
    .socketServer{
        position:fixed;
        background-color: beige;
        left: 10%;
        top: 50px;
        padding: 10px;
        border-radius: 5px;
        width: 80%;
        padding: 10 10;
        height: 450px;
        overflow-y:auto;
    }
    .socketServer::-webkit-scrollbar{
        display: none;
    }
    h1{
        text-align: center;
    }
    .dataname{
        width: 80%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid rebeccapurple;
    }
    .dataprotocl{
        width: 35%;
        height: 30px;
        border: 1px solid rebeccapurple;
    }
    .datapcharset{
        width: 34%;
        height: 30px;
        border: 1px solid rebeccapurple;
    }
    .data-div{
        margin-bottom: 20px;
    }
    .dataip{
        width: 60%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid rebeccapurple;
    }
    .dataport{
        width: 10%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid rebeccapurple;
    }
    .data-label{
        width: 10%;
        display: inline-block;
        text-align: right;
        margin-right: 10px;
        font-family: monospace;
    }
    .datatext{
        display: block;
        width: 80%;
        height: 250px;
        margin-left: 100px;
        border: 1px solid rebeccapurple;
        border-radius: 3px;
    }
    .datatable{
        width: 80%;
        margin-left: 100px;
    }
    table, td,th{
        border:2px solid rebeccapurple;
        border-collapse: collapse;
    } 
    tr{
        height: 20px;
    }
    td,th{
        white-space: nowrap;
        width: 40%;
        text-align: center;
    }
    .btn-return{
        border: 1px solid black;
        border-radius: 5px;
        width: 15%;
        height: 50px;
        background-color: rebeccapurple;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    .btn-return:hover{
        background-color: royalblue;
    }
    .btn-send{
        border: 1px solid black;
        border-radius: 5px;
        width: 60%;
        height: 50px;
        background-color: rebeccapurple;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    .btn-send:hover{
        background-color: royalblue;    
    }
    .tdInput{
        margin-left: 10px;
        width: 85%;
        height: 30px;
        border: 1px solid rebeccapurple;
        border-radius: 3px;
        padding-left: 20px;
    }

</style>
