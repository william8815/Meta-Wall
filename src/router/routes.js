export const routes = [
  {
    path: '/',
    component: () => import('../views/layouts/MainLayout.vue'),
    children: [
      // posts
      {
        path: 'posts',
        name: 'get-posts',
        component: () => import('../views/GetPosts.vue')
      },
      {
        path: 'createPost',
        name: 'create-post',
        component: () => import('../views/CreatePost.vue')
      }
    ]
  },
  // user
  {
    path: '/user',
    component: () => import('../views/layouts/MainLayout.vue'),
    children: [
      {
        path: 'profile',
        name: 'user-profile',
        component: () => import('../views/UserProfile.vue')
      },
      {
        path: 'followings',
        name: 'user-followings',
        component: () => import('../views/UserFollowings.vue')
      },
      {
        path: 'likeslist',
        name: 'user-likeslist',
        component: () => import('../views/UserLikeslist.vue')
      }
    ]
  }
]
