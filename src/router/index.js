import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/access",
    name: "Access",
    component: () => import("../views/Access.vue"),
  },
  {
    path: "/businessNav",
    name: "BusinessNav",
    component: () => import("../views/BusinessNav.vue"),
  },
  {
    path: "/companyNav",
    name: "CompanyNav",
    component: () => import("../views/CompanyNav.vue"),
  },
  {
    path: "/groupNav",
    name: "GroupNav",
    component: () => import("../views/GroupNav.vue"),
  },
  {
    path: "/productPrice",
    name: "ProductPrice",
    component: () => import("../views/ProductPrice.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/invest",
    name: "Invest",
    component: () => import("../views/Invest.vue"),
  },
  {
    path: "/business",
    name: "Business",
    component: () => import("../views/Business.vue"),
  },

  {
    path: "/recruit",
    name: "Recruit",
    component: () => import("../views/Recruit.vue"),
  },
  {
    path: "/qa",
    name: "QA",
    component: () => import("../views/QA.vue"),
  },
  {
    path: "/factory",
    name: "Factory",
    component: () => import("../views/Factory.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
