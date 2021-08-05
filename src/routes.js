
import HelloWorld from './components/HelloWorld.vue'
import socketmenu from './components/socket_menu.vue'
import unDevelopment from './components/un-development.vue'
import info from './components/info.vue'
import infoSuccess from "./components/info-success.vue"
import serverSocket from "./components/server-socket.vue"

export default [
    { path: "/", component: HelloWorld },
    { path: "/socket", component: socketmenu },
    { path: "/unDevelopment", component: unDevelopment },
    { path: "/info/:protocl", component: info },
    { path: "/infoSuccess", component: infoSuccess },
    { path: "/serverSocket", component: serverSocket },
]