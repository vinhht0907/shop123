import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Men from "../views/Men.vue";
import Women from "../views/Women.vue";
import About from "../views/About.vue";
import Search from "../views/Search.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },

    {
        path: "/men",
        name: "Men",
        component: Men
    },

    {
        path: "/women",
        name: "Women",
        component: Women
    },

    {
        path: "/about",
        name: "About",
        component: About
    },

    {
        path: "/search",
        name: "Search",
        component: Search
    },

    {
        path: "/shop/:gender/:id",
        name: "ProductDetails",
        component: ProductDetails,
        props: true,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;