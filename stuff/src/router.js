import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {path: '/', name :"PageAccueil", component : ()=> import("./components/Accueil.vue") },
    {path: "/item", name :"Item" , component : ()=> import("./components/Item.vue")},
    {path: "/panier", name :"Panier" , component : ()=> import("./components/Panier.vue")}
]

const router = new Router ({mode: "history" , routes});

export default router;