const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      { path: "/service", component: () => import("pages/ServicesPage.vue") },
      { path: "/about", component: () => import("pages/AboutPage.vue") },
      { path: "/contact", component: () => import("pages/ContactPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
