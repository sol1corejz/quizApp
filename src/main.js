import {createApp, h} from 'vue'
import App from './App.vue'
import QuestionsPage from "@/components/QuestionsPage/QuestionsPage.vue";

const routes = [
    { path: '/', component: App },
    { path: '/questions', component: QuestionsPage },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp({
    render: ()=>h(App)
})

app.use(router)

app.mount('#app')
