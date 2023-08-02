import {createRouter, createWebHashHistory} from "vue-router"
import QuestionsPage from "@/components/QuestionsPage/QuestionsPage.vue";
import MainPage from "@/components/MainPage/MainPage.vue";

const routes = [
    { name: 'main', path: '/main', component: MainPage, alias: '/' },
    { name: 'questions', path: '/questions', component: QuestionsPage },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})