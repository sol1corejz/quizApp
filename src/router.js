import App from "@/App.vue";
import QuestionsPage from "@/components/QuestionsPage/QuestionsPage.vue";

const routes = [
    { path: '/', component: App },
    { path: '/questions', component: QuestionsPage },
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})