import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import MainPage from '../views/MainPage.vue';
import Products from '../components/Product.vue';
import CartList from '../views/CartList.vue';
import NotFound from '../views/NotFound.vue';
import AddCart from '../views/AddCart.vue';
import EditCart from '../views/EditCart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/add-carts',
    name: 'AddCart',
    component: AddCart,
  },
  {
    path: '/edit-carts/:id',
    name: 'EditCart',
    component: EditCart,
  },
  {
    path: '/carts',
    name: 'CartList',
    component: CartList,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && to.name === 'Register' && localStorage.token) next({ name: 'MainPage' });
  else next();
});
router.beforeEach((to, from, next) => {
  if (to.name === 'CartList' && !localStorage.token) {
    next({ name: 'Login' });
    swal({ title: 'Whoops..', text: 'Login first, then start shooping! /(^ u ^)/', icon: 'info' });
  } else if (to.name === 'AddCart' && !localStorage.token) {
    next({ name: 'Login' });
    swal({ title: 'Whoops..', text: 'Login first, then start shooping! /(^ u ^)/', icon: 'info' });
  } else next();
});

export default router;
