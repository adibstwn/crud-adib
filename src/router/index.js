import { createRouter, createWebHistory } from 'vue-router'
import UserManager from '../views/UserManager.vue'
import AddUser from '../views/AddUser.vue'
import EditUser from '../views/EditUser.vue'
import ViewUser from '../views/ViewUser.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/users',
  },
  {
    path: '/users',
    name: 'UserManager',
    component: UserManager
  },
  {
    path: '/users/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/users/edit/:userId',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/users/view/:userId',
    name: 'ViewUser',
    component: ViewUser
  }
  ,
  {
    path: '/:patchMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
