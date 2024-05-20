export const routes = [
  {
    path: '/',
    component: () => import('../views/layouts/MainLayout.vue'),
    children: [
      {
        path: 'posts',
        component: () => import('../views/GetPosts.vue')
      }
    ]
  }
]
